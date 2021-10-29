const express = require('express');
const app = express();
const config = require('./config');
const path = require('path');

require('dotenv').config();

config(app);