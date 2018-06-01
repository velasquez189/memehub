DROP DATABASE IF EXISTS meme_pieDB;

CREATE DATABASE meme_pieDB;

USE meme_pieDB;

CREATE TABLE images (
    img_id SMALLINT(15) not null,
    img_name VARCHAR(50) not null default '',
    img_type VARCHAR(50) not null default '',
    img BLOB not null,
    img_size VARCHAR(50) not null default '',
    PRIMARY KEY(img_id)
);



SELECT * FROM meme_pieDB;