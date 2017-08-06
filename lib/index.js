'use strict';

const express = require('express');

const app = express();

app.use(express.static('demo')); 
app.use(express.static('dist')); 

app.listen(3000, function () {
  console.log('app listening on port 3000!')
})