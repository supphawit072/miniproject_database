'use strict';
const express = require('express');
const crypto = require('crypto');
const sjRoute = express.Router();
const connection = require('../db'); // Imports connection from db.js

sjRoute.post('/subject', function (req, res, next) {
  // Validate required fields (adjust as needed)
  if (!req.body.subject_code || !req.body.subject_name || !req.body.units) {
    return res.status(400).send("Missing required data in request body");
  }

  connection.execute(`INSERT INTO subject(subject_code, subject_name, units, semester, Instructor, subject_description, subject_objectives, assessment_criteria, course, group_name) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,
  [
      req.body.subject_code,
      req.body.subject_name,
      req.body.units, // Assuming credit_units is a number
      req.body.semester,
      req.body.Instructor,
      req.body.subject_description,
      req.body.subject_objectives,
      req.body.assessment_criteria,
      req.body.course,
      req.body.group_name
      
  ]).then(() => {
      console.log('Insert successful');
      res.status(201).send("Insert Successfully");
  }).catch((err) => {
      console.error(err);
      res.status(500).send("Insert Failed");
  });
});

sjRoute.get('/subject', function (req, res, next) {
  connection.execute('SELECT * FROM subject')
      .then((result) => {
          const rawData = result[0];
          res.json(rawData);
      }).catch((err) => {
          console.error(err);
          res.status(500).send("Fetch Failed");
      });
});

sjRoute.post('/check', function (req, res, next) {
  // Validate required fields (adjust as needed)
  if (!req.body.subject_code || !req.body.subject_name) {
    return res.status(400).send("Missing required data in request body");
  }

  connection.execute('SELECT * FROM subject WHERE subject_code=? AND subject_name=?;',
      [
          req.body.subject_code,
          req.body.subject_name
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
sjRoute.use('/', function (req, res, next) {
  res.sendStatus(404);
});

module.exports = sjRoute;
