eval "$(ssh-agent -s)" &&
ssh-add -k ~/.ssh/id_rsa &&

cd /home/ubuntu/react/my_profile &&
git pull &&
npm install &&
npm run build