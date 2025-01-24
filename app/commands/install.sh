#!/bin/bash

set -e

# needrestart configuration update
sudo sed -i "/#\$nrconf{restart} = 'i';/s/.*/\$nrconf{restart} = 'a';/" /etc/needrestart/needrestart.conf

# Install required packages
yes | sudo apt-get install jq
yes | sudo apt-get install unzip

# Generate random username and password
tmp_pass=$(head -c 50 /dev/urandom | base64)
tmp_user=$(head -c 50 /dev/urandom | base64)

# Setup directory for pirichain
mkdir -p ~/pirichain
cd ~/pirichain || exit

# Download and unzip pirichain
wget --no-cache https://generator.pirisubchains.com/pirichain.zip
unzip pirichain.zip

# Stop MongoDB if it's running
if pgrep mongo; then
  sudo kill -2 $(pgrep mongo)
  sleep 5
fi

# Start MongoDB without authentication
LOG_DIR="/var/log/mongodb"
sudo mkdir -p "$LOG_DIR"
sudo mongod --bind_ip 0.0.0.0 --port 27017 --dbpath "/var/lib/mongodb" --logpath "$LOG_DIR/mongod.log" --fork

# Wait for MongoDB to start
sleep 5

# Create MongoDB user
if mongosh piriChain --eval "db.createUser({ user: '$tmp_user', pwd: '$tmp_pass', roles: ['dbAdmin', 'readWrite']})"; then
  echo "MongoDB user created successfully."
else
  echo "Failed to create MongoDB user." >&2
  exit 1
fi

# Stop MongoDB
sudo kill -2 $(pgrep mongo)
sleep 5

# Start MongoDB with authentication
sudo mongod --bind_ip 0.0.0.0 --port 27017 --dbpath "/var/lib/mongodb" --logpath "$LOG_DIR/mongod.log" --fork --auth

# Make MongoDB autostart service for OS
sudo systemctl restart mongod
sudo systemctl enable mongod

# Update han.json with MongoDB credentials
jq --arg aVar "$tmp_user" '.MONGODB_USER = $aVar' ~/pirichain/bin/han.json > ~/pirichain/bin/han_temp.json
mv ~/pirichain/bin/han_temp.json ~/pirichain/bin/han.json

jq --arg aVar "$tmp_pass" '.MONGODB_PASS = $aVar' ~/pirichain/bin/han.json > ~/pirichain/bin/han_temp.json
mv ~/pirichain/bin/han_temp.json ~/pirichain/bin/han.json

# Set permissions
chmod -R 777 ~/pirichain

# Create systemd service for Pirichain Node Server
{
    echo '[Unit]'
    echo 'Description=Pirichain Node Server'
    echo '[Service]'
    echo 'ExecStart=/root/pirichain/piri-chain'
    echo 'StandardOutput=syslog'
    echo 'StandardError=syslog'
    echo 'SyslogIdentifier=%n'
    echo 'User=root'
    echo 'Group=nogroup'
    echo 'Restart=always'
    echo 'Environment=PATH=/root/pirichain'
    echo 'Environment=NODE_ENV=production'
    echo 'WorkingDirectory=/root/pirichain'
    echo '[Install]'
    echo 'WantedBy=multi-user.target'
} | sudo tee /etc/systemd/system/piriChain.service
