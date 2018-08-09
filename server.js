#!/usr/bin/env node
const express = require('express');
const app = express();
const hostname = process.env.HOSTNAME || 'localhost';
const port = parseInt(process.env.PORT, 10) || 8080;
const publicDir = process.argv[2] || __dirname + '/public';
const path = require('path');

const jwt = require('jsonwebtoken');
const fs = require('fs');

app.get('/', function (req, res) {
  res.sendFile(path.join(publicDir, '/index.html'));
});

const private_key = fs.readFileSync('apple_private_key.p8').toString();
const team_id = 'ABCDEFGHIJ'; // your 10 character apple team id, found in https://developer.apple.com/account/#/membership/
const key_id = 'KLMNOPQRST'; // your 10 character generated music key id. more info https://help.apple.com/developer-account/#/dev646934554
const token = jwt.sign({}, private_key, {
  expiresIn: '180d',
  issuer: team_id,
  header: {
    alg: 'ES256',
    kid: key_id
  }
});

app.get('/token', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({token: token}));
});

app.use(express.static(publicDir));

console.log('Listening at', publicDir, hostname, port);
app.listen(port, hostname);
