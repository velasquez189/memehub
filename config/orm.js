const connection = require("../config/connection.js");

const printQuestionMarks = num => {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push("?")
    };
    return arr.toString();
};

const objToSql = ob => {
    let arr = [];

    for (let key in ob) {
        let value = ob[key];

        if (object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
        return arr.toString();
    }
};
const orm = {
    selectAll: (tableInput, cb) => {
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, (err, res) => {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    findTagged: (tableInput, cb) => {
        let queryString = "SELECT " + memes.meme_id + ", " + memes.file_path + ", " + tagged.tag_id;
        queryString += "FROM " + memes;
        queryString += "INNER JOIN " + tagged;
        queryString += "ON " + memes.meme_id;
        queryString += "= "
        tagged.meme_id;
        queryString += "WHERE " + tag_id;
        queryString += "= " + ('?');

        console.log(queryString);

        connection.query(queryString, (err, res) => {
            if (err) {
                throw err;
            }
            cb(res);
            // findTagged() => {
            //     const query = connection.query("SELECT * FROM memes WHERE meme_id=?", [""], (err, res) =>{
            //         for (var i=0; i < res.length; i++) {
            //             console.log(res[i].memes.meme_id + " | " + res[i].tagged.meme_id);
            //         }
            //     });
            // };
        });
    },
    insertOne: (table, cols, vals, cb) => {
        let queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vales.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, (err, res) => {
            if (err) {
                throw err;
            }
            cb(res);
        });
    }
};

//  Export the orm object for the model
module.exports = orm;