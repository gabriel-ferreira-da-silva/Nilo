CREATE DATABASE IF NOT EXISTS NILODB;

CREATE USER 'NILOuser'@'localhost' IDENTIFIED BY 'NILOuser';
GRANT ALL PRIVILEGES ON NILODB.* TO 'NILOuser'@'localhost';

FLUSH PRIVILEGES;

USE NILODB;

DROP TABLE IF EXISTS have, cart, item, product, users;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,

    CHECK (CHAR_LENGTH(email) > 3)
);

CREATE TABLE product (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name varchar(255),
    description varchar(1000),
    category varchar(255),
    image_url varchar(1000),
    rate float,
    price float
);

CREATE TABLE item (
    id INT,  
    quantity int,

    PRIMARY KEY (id),
    FOREIGN KEY (id) REFERENCES product(id) ON DELETE CASCADE
);


CREATE TABLE cart (
    id_user INT,  
    date_created date,
    date_sold date,

    PRIMARY KEY (id_user, date_created),
    FOREIGN KEY (id_user) REFERENCES users(id)
);

CREATE TABLE have (
    id_item INT,  
    id_cart INT,  
    quantity int,

    PRIMARY KEY (id_cart, id_item),
    FOREIGN KEY (id_cart) REFERENCES cart(id_user),
    FOREIGN KEY (id_item) REFERENCES item(id)
);
