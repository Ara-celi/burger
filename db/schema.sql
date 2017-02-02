-- Create the database burgers_db and specified it for use.
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table burgers and fields.
CREATE TABLE burgers
(
-- id: an auto incrementing int that serves as the primary key.	
id int(11) NOT NULL AUTO_INCREMENT,
-- burger_name: a string.
burger_name varchar(255) NOT NULL,
-- devoured: a boolean.
devoured boolean NOT NULL,
-- date: a TIMESTAMP.
ts TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);
