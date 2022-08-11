const path = require('path');
const bodyParser = require('body-parser');
const app = require('express')();
const express = require('express');
const cors = require('cors')
require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

const PROJECT_DIR = path.normalize(__dirname)+ '/sdk';
console.log(PROJECT_DIR)

app.use('/',express.static(path.join(PROJECT_DIR, '')));

module.exports = app;