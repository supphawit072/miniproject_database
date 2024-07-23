'use strict';

const express = require('express');
const udRoute = express.Router();
const connection = require('../db');

udRoute.put('/users/:uid', function (req, res, next) {
    connection.execute("UPDATE users_epy SET fname=?, lname=?, tel=? WHERE id=?;",
        [req.body.fname,req.body.lname, req.body.tel,  req.params.uid])
        .then(() => {
            console.log('Update successful');
            res.status(200).send("Update Successfully.");
        }).catch((err) => {
            console.error(err);
            res.status(500).send("Failed to update.");
        });
});

  
udRoute.delete('/users/:uid', function (req, res, next) {
    connection.execute("DELETE FROM users_epy WHERE id=?;",
        [req.params.uid])
        .then(() => {
            console.log('ok');
        }).catch((err) => {
            console.log(err);
        });
    res.end();
});

udRoute.put('/subject/:uid', function (req, res, next) {
    
    connection.execute("UPDATE subject SET subject_code=?, group_name=? WHERE id=?;",
        [req.body.subject_code,req.body.group_name,req.params.uid])
        .then(() => {
            console.log('Update successful');
            res.status(200).send("Update Successfully.");
        }).catch((err) => {
            console.error(err);
            res.status(500).send("Failed to update.");
        });
});

udRoute.delete('/subject/:uid', function (req, res, next) {
    connection.execute("DELETE FROM subject WHERE id=?;",
        [req.params.uid])
        .then(() => {
            console.log('ok');
        }).catch((err) => {
            console.log(err);
        });
    res.end();
});

udRoute.put('/grades/:uid', function (req, res, next) {
    
    connection.execute("UPDATE grades SET subject_code=?, group_name=? ,grades=? WHERE id=?;",
        [req.body.subject_code,req.body.group_name,,req.body.grades,req.params.uid])
        .then(() => {
            console.log('Update successful');
            res.status(200).send("Update Successfully.");
        }).catch((err) => {
            console.error(err);
            res.status(500).send("Failed to update.");
        });
});
udRoute.delete('/grades/:uid', function (req, res, next) {
    connection.execute("DELETE FROM grades WHERE id=?;",
        [req.params.uid])
        .then(() => {
            console.log('ok');
        }).catch((err) => {
            console.log(err);
        });
    res.end();
});
udRoute.use('/', function (req, res, next) {
    res.sendStatus(404);
})


module.exports = udRoute;