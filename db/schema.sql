DROP DATABASE IF EXISTS meme_pieDB;

CREATE DATABASE meme_pieDB;

USE meme_pieDB;

CREATE TABLE images (
    img_id SMALLINT(15) not null PRIMARY KEY,
    img_name VARCHAR(75) not null default '',
    img_type ENUM('small','medium','large'),
    dated TIMESTAMP(10)
);


SELECT * FROM images;