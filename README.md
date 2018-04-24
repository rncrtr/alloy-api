# Instructions

# Install
$ npm install

# Run in Dev
$ npm run dev

# Production Setup:
$ npm i -g pm2

## Run in Production
$ npm start

# Mongo Database Setup:

## Install it 
### On AWS Cloud 9
Run the command sudo nano /etc/yum.repos.d/mongodb-org-3.6.repo on the shell

Copy-paste the following content to the file

[mongodb-org-3.6]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/amazon/2013.03/mongodb-org/3.6/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-3.6.asc

Hit ctrl+o and then hit enter to save the file and hit ctrl+x to close the file.

Run the command sudo yum install -y mongodb-org

Run the command mkdir /home/ec2-user/environment/data to create a data directory for your MongoDB data folder.

Run the command mongod --bind_ip=$IP --dbpath=/home/ec2-user/environment/<FOLDERHERE>/data --nojournal to run the MongoDB daemon process.

### On c9.io do this instead:
$ sudo apt-get install -y mongodb-org

__Make data directory__
$ mkdir data

__Create the command in the mongod file__
$ echo 'mongod --dbpath=data --nojournal --rest "$@"' > mongod

__Change its permissions so it will let you run it__
$ chmod a+x mongod

__Run it:__
$ ./mongod