const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        const hdlbrsObj = {
            burgers: data
        };
        console.log(hdlbrsObj);
        res.render("index", hdlbrsObj);
    })
})

router.post("/api/burgers", function(req, res) {
    burgers.insertOne(
        ["burgerName", "devoured"],
        [req.body.burgerName, req.body.devoured],
        function(result) {
            res.json({ id: result.insertId });
        }
    )
})

router.put("/api/burgers/:id", function(req, res) {
    const condition = "id = " + req.params.id;

    console.log("condition", condition);
    burger.updateOne({ devoured: req.body.devoured }, condition, function(result) {
        if(result.changedRows === 0) {
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    })
})

router.delete("/api/burgers/:id", function(req, res) {
    const condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.delete(condition, function(result) {
        if((result.changedRows === 0)) {
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    })
})

module.exports = router;