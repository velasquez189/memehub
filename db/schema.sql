DROP DATABASE IF EXISTS meme_pieDB;

CREATE DATABASE meme_pieDB;

USE meme_pieDB;

CREATE TABLE memes (
    meme_id SMALLINT(15) AUTO_INCREMENT not null PRIMARY KEY,
    file_path VARCHAR(75) not null default '',
    date_created TIMESTAMP(6)
);

CREATE TABLE tagged (
    meme_id SMALLINT(15) not null,
    tag_id VARCHAR(50) not null
);

SELECT *
FROM memes;


SELECT memes.meme_id, memes.file_path, tagged.tag_id
FROM memes
INNER JOIN tagged ON memes.meme_id=tagged.meme_id;