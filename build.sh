#!/bin/bash

echo "Setting up the database..."
cd db || exit

sudo mysql -u root  < nilodb_create.sql
mysql -u NILOuser -p NILOuser NILODB < nilodb_create.sql
mysql -u NILOuser -p NILOuser NILODB < nilodb_insert.sql

cd ..

echo "Starting backend service..."
cd backend || exit
npm install
cd server || exit
node ProductServer.js &
cd ../..

echo "Starting frontend service..."
cd frontend || exit
npm install
npm start

echo "Backend and frontend services are running."
