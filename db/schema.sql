CREATE DATABASE Burger_DB;

USE Burger_DB;

CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT 0,
    date TIMESTAMP,
    PRIMARY KEY (id)
);