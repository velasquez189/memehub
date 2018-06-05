USE meme_pieDB;

INSERT INTO memes (file_path)
VALUES ('memes/andrea.jpeg');
INSERT INTO memes (file_path)
VALUES ('memes/gayland.jpeg');
INSERT INTO memes (file_path)
VALUES ('memes/rathew.jpeg');

INSERT INTO tagged (meme_id, tag_id)
VALUES (1, 'student');
INSERT INTO tagged (meme_id, tag_id)
VALUES (1, 'columbine');
INSERT INTO tagged (meme_id, tag_id)
VALUES (1, 'whamen');

INSERT INTO tagged (meme_id, tag_id)
VALUES (2, 'student');
INSERT INTO tagged (meme_id, tag_id)
VALUES (2, 'murican');
INSERT INTO tagged (meme_id, tag_id)
VALUES (2, 'cyka');

INSERT INTO tagged (meme_id, tag_id)
VALUES (3, 'student');
INSERT INTO tagged (meme_id, tag_id)
VALUES (3, 'gaylandian');
INSERT INTO tagged (meme_id, tag_id)
VALUES (3, 'soy boi');
