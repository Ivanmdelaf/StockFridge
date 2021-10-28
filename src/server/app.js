const express = require('express');
const app = express();
const config = require('./config');
require('dotenv').config();

config(app);