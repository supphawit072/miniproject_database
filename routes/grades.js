'use strict';
const express = require('express');
const crypto = require('crypto');
const gdRoute = express.Router();
const connection = require('../db'); // Imports connection from db.js

gdRoute.post('/grades', function (req, res, next) {
  // Validate required fields (adjust as needed)
  if (!req.body.subject_code || !req.body.subject_name || !req.body.group_code) {
    return res.status(400).send("Missing required data in request body");
  }

  connection.execute(`INSERT INTO grades(subject_code, subject_name, group_code, grades, student_count,instructor, 	course) VALUES ( ?,?, ?, ?, ?, ?, ?);`,
  [
      req.body.subject_code,
      req.body.subject_name,
      req.body.group_code, // Assuming credit_units is a number
      req.body.grades,
      req.body.student_count,
      req.body.instructor,
      req.body.course,

  ]).then(() => {
      console.log('Insert successful');
      res.status(201).send("Insert Successfully");
  }).catch((err) => {
      console.error(err);
      res.status(500).send("Insert Failed");
  });
});

gdRoute.get('/grades', function (req, res, next) {
  connection.execute('SELECT * FROM grades')
      .then((result) => {
          const rawData = result[0];
          res.json(rawData);
      }).catch((err) => {
          console.error(err);
          res.status(500).send("Fetch Failed");
      });
});

gdRoute.post('/check', function (req, res, next) {
  // Validate required fields (adjust as needed)
  if (!req.body.subject_code || !req.body.subject_name) {
    return res.status(400).send("Missing required data in request body");
  }

  connection.execute('SELECT * FROM grades WHERE subject_code=? AND grade=?;',
      [
          req.body.subject_code,
          req.body.grade
      ]).then((result) => {
          const data = result[0];
          if (data) { // Check if data exists (not undefined)
              res.sendStatus(200);
          } else {
              res.sendStatus(400);
          }
      }).catch((err) => {
          console.error(err);
          res.status(500).send("Check Failed");
      });
});

// 404 handler for this router
gdRoute.use('/', function (req, res, next) {
  res.sendStatus(404);
});

module.exports = gdRoute;
