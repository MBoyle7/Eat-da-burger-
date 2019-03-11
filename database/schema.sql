CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
    burgerName VARCHAR(75) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);