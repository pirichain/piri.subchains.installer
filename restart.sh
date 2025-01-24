git stash
pm2 delete "piri.subchains.installer"
git pull
npm install
pm2 start "npm start" --name "piri.subchains.installer" --log-date-format "DD-MM-YYYY HH:mm"
echo "Application has ben started successfully and running at port 7473 via pm2 on the background!"
