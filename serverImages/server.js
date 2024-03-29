const express = require('express');
const fs = require('fs');
const resize = require('./resize');

const server = express();
// http://18.185.139.65/0.jpg?f=webp&w=400
server.listen(4321, () => {
  console.log('Start Images Server');
});

server.get('*', (req, res) => {
  const widthString = req.query.w;
  const heightString = req.query.h;
  const format = req.query.f;
  const name = req.params[0];

  let width;
  let height;
  if (widthString) {
    width = parseInt(widthString, 10);
  }
  if (heightString) {
    height = parseInt(heightString, 10);
  }

  fs.exists(`assets/${name}`, exists => {
    if (exists) {
      res.type(`image/${format || 'jpg'}`);
      res.set('Cache-Control', 'public, max-age=86400, no-transform');
      resize(`assets/${name}`, format, width, height).pipe(res);
    } else {
      console.log('Opps!');
      res.type(`image/${format || 'png'}`);
      res.set('Cache-Control', 'public, max-age=86400, no-transform');
      resize(`assets/image-not-found.png`, format || 'png', width, height).pipe(res);
    }
  });
});
