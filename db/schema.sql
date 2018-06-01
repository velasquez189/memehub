DROP DATABASE IF EXISTS meme_pieDB;

CREATE DATABASE meme_pieDB;

USE meme_pieDB;

CREATE TABLE images (
    img_id SMALLINT(15) not null PRIMARY KEY,
    img_name VARCHAR(75) not null default '',
    img_type VARCHAR(50) not null default '',
);


SELECT * FROM images;