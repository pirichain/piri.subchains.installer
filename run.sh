#!/bin/bash

cd ~/piri.subchains.installer

# Disable IPv6 until all is done!
sysctl -w net.ipv6.conf.all.disable_ipv6=1

echo "Removing ~/bin directory from the PATH variable..."
sed -i "/export PATH=\$PATH:~/bin/d" ~/.bashrc

# Create the ~/bin directory
echo "Creating ~/bin directory..."
mkdir -p ~/bin

# Download the file
echo "Downloading the file..."
if curl -o ~/bin/pirisubchain.client https://pirisubchains.com/pirisubchain.client; then
    # Wait until the file is downloaded completely
    while [ ! -f ~/bin/pirisubchain.client ]; do
        sleep 1
    done

    # Grant executable permission to the file
    chmod +x ~/bin/pirisubchain.client

    # Add ~/bin directory to the PATH variable to make it accessible from anywhere
    echo 'export PATH=$PATH:~/bin' >> ~/.bashrc &&
    source ~/.bashrc &&

    # Wait until the file is executable
    while [ ! -x ~/bin/pirisubchain.client ]; do
        sleep 1
    done

    echo "pirisubchain.client is ready to use."
else
    echo "Failed to download the file."
    rm -rf ~/bin
    sed -i "/export PATH=\$PATH:~/bin/d" ~/.bashrc
    echo "Cleanup completed."
fi


# switch to installer dir
cd "$(dirname "$0")"

# check npm installation if does not installed, then install
if ! command -v npm &> /dev/null
then
    echo "npm not found, installing..."
    # install Node.js & npm
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi

# check pm2 installation if does not installed, then install
if ! command -v pm2 &> /dev/null
then
    npm install -g pm2
fi

npm install -g cross-env

npm install

mkdir -p public/assets && cp -r build/client/assets/* public/assets

pm2 delete piri.subchains.installer
# run the application on port 7473
pm2 start "npm start" --name "piri.subchains.installer" --log-date-format "DD-MM-YYYY HH:mm"

echo "Application has ben started successfully and running at port 7473 via pm2 on the background!"

# check nginx and install
if ! command -v nginx &> /dev/null
then
    sudo apt-get update
    sudo apt-get install -y nginx
fi

# set the configuration of nginx
sudo bash -c 'cat > /etc/nginx/sites-available/piri.subchains.installer <<EOF
server {
    listen 7474;
    server_name _;

    location / {
        proxy_pass http://127.0.0.1:7473;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF'

# disable default site and put the piri.subchains.installer as default
sudo rm /etc/nginx/sites-enabled/default
sudo ln -s /etc/nginx/sites-available/piri.subchains.installer /etc/nginx/sites-enabled/

# restart Nginx
sudo systemctl restart nginx

IP_ADDRESS=$(curl -s ifconfig.me)
echo "Nginx has been configured and restarted. Application is accessible on $IP_ADDRESS:7474"
