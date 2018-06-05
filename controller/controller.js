const express = require("express");
const router = express.Router();
const memes = require("../models");
const path = require("path");


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

router.get('/upload', (req, res) =>{
    res.sendFile(path.join(__dirname, "upload.html"));
})


router.post("/api/memes", (req, res) => {
    Memes.insertOne([
        "memes", "file_path",
    ], [
        req.body.name
    ], result => {
        res.json({
            meme_id: result.insertId
        })
    });
    Memes.insertOne([
        "tagged", "tag_id",
    ], [
        req.body.tags_id
    ], result => {
        res.json({
            meme_id: result.insertId
        })
    });
});