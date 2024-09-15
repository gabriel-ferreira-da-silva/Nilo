#!/bin/bash

echo "Setting up the database..."
cd db || exit


sudo mysql -u root < nilodb_create.sql
sudo mysql -u root < nilodb_insert_product.sql
sudo mysql -u root < nilodb_insert_manager.sql
sudo mysql -u root < nilodb_insert_user.sql
sudo mysql -u root < nilodb_insert_cart.sql
sudo mysql -u root < nilodb_insert_item.sql

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
