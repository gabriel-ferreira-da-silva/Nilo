#!/bin/bash

echo "Setting up the database..."
cd db || exit

sudo mysql -u root  < nilodb_create.sql
mysql -u NILOuser -p NILOuser NILODB < nilodb_create.sql
mysql -u NILOuser -p NILOuser NILODB < nilodb_insert_product.sql
mysql -u NILOuser -p NILOuser NILODB < nilodb_insert_manager.sql

cd ..

echo "Starting backend service..."
cd backend || exit
npm install
cd server || exit
cd ..
node main.js &
cd ..

echo "Starting frontend service..."
cd frontend || exit
npm install
npm start

echo "Backend and frontend services are running."
