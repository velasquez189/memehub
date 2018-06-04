const express = require("express");
const router = express.Router();
const memes = require("../models/memes.js");
const path = require("path");


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});



router.post("/api/memes", (req, res) => {
    memes.create([
        "memes", "file_path",
    ], [
        req.body.name
    ], result => {
        res.json({
            meme_id: result.insertId
        })
    });
    memes.create([
        "tagged", "tag_id",
    ], [
        req.body. //(METADATA) tag_id
    ], result => {
        res.json({
            meme_id: result.insertId
        })
    });
});