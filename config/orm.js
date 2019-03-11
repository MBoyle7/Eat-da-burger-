const connection = require("../config/connection.js");

function createQmarks(num) {
    const arr = [];
    for(var i; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function translateSql(ob) {
    const arr = [];
    for(var key in ob) {
        var value = ob[key];
        if(Object.hasOwnProperty.call(ob, key)) {
            if(typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

const orm = {
    selectAll: function(table, cb) {
        const dbquery = "SELECT * FROM " + table + ";";

        connection.query(dbquery, function(err, res) {
            if(err) {
                throw err;
            }
            cb(res);
        });
    },

    insertOne: function(table, cols, vals, cb) {
        const dbquery = "INSERT INTO" + table + " (" + cols.toString() + ") " + "VALUES (" + createQmarks(vals.length) + ") ";
        console.log(dbquery);

        connection.query(dbquery, vals, function(err, res) {
            if(err) {
                throw err;
            }
            cb(res);
        });
    },

    updateOne: function(table, objColVals, condition, cb) {
        const dbquery = "UPDATE " + table + " SET " + translateSql(objColVals) + " WHERE " + condition;
        console.log(dbquery);

        connection.query(dbquery, vals, function(err, res) {
            if(err) {
                throw err;
            }
            cb(res);
        });
    },

    deleteOne: function(table, condition, cb) {
        const dbquery = " DELETE FROM " + table + " WHERE " + condition;
        console.log(dbquery);

        connection.query(dbquery, vals, function(err, res) {
            if(err) {
                throw err;
            }
            cb(res);
        });
    }
};    