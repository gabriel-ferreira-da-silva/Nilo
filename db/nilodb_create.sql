CREATE DATABASE IF NOT EXISTS NILODB;

CREATE USER 'NILOuser'@'localhost' IDENTIFIED BY 'NILOuser';
GRANT ALL PRIVILEGES ON NILODB.* TO 'NILOuser'@'localhost';

FLUSH PRIVILEGES;

USE NILODB;

DROP TABLE IF EXISTS have, cart, item, product, users, manager, added_product , edited_product;

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
    name varchar(255),
    description varchar(1000),
    category varchar(255),
    image_url varchar(1000),
    rate float,
    price float
    id_manager int,

    FOREIGN key(id_manager) REFERENCES manager(id)
);

CREATE TABLE edit(
    id_manager int,
    id_product int,

    PRIMARY key (id_manager,id_product)
    FOREIGN key (id_manager) REFERENCES manager(id)
    FOREIGN key (id_product) REFERENCES product(id)
)

CREATE TABLE item (
    id INT,  
    cart_id INT,
    cart_date date,
    quantity int,


    PRIMARY KEY (id),
    FOREIGN KEY (id) REFERENCES product(id) ON DELETE CASCADE
    FOREIGN KEY (cart_id) REFERENCES cart(id_user)
    FOREIGN KEY (cart_date) REFERENCES cart(date_created)
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
