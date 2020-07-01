//define language
const express = require('express');
const app = express();
// connect to
app.use(express.json());
app.use(express.static("public"));