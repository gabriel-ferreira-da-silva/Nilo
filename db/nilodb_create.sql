CREATE DATABASE IF NOT EXISTS NILODB;

CREATE USER 'NILOuser'@'localhost' IDENTIFIED BY 'NILOuser';
GRANT ALL PRIVILEGES ON NILODB.* TO 'NILOuser'@'localhost';

FLUSH PRIVILEGES;

USE NILODB;

DROP TABLE IF EXISTS have,edit, item,cart, product, users, managers;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,

    CHECK (CHAR_LENGTH(email) > 3)
);

CREATE TABLE managers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,

    CHECK (CHAR_LENGTH(email) > 3)
);

CREATE TABLE product (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    description VARCHAR(1000),
    category VARCHAR(255),
    image_url VARCHAR(1000),
    rate FLOAT,
    price FLOAT,
    id_manager INT,

    FOREIGN KEY (id_manager) REFERENCES managers(id)
);


CREATE TABLE cart (
    id_user INT,  
    date_created DATETIME,
    date_sold DATETIME,

    PRIMARY KEY (id_user, date_created),
    FOREIGN KEY (id_user) REFERENCES users(id)
);

CREATE TABLE item (
    id INT,  
    id_user INT,
    cart_date DATETIME,
    quantity INT,

    PRIMARY KEY (id, id_user, cart_date),
    FOREIGN KEY (id) REFERENCES product(id) ON DELETE CASCADE,
    FOREIGN KEY (id_user, cart_date) REFERENCES cart(id_user, date_created)
);

