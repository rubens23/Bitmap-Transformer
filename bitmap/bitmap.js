const fs = require('fs');

const file = fs.readFileSync(__dirname + '/non-palette-bitmap.bmp');

const headers = {};

console.log(file.slice());

console.log(file[0], file[1]);

headers.type = file.toString('ascii', 0, 2);
headers.size = file.readUInt32LE(2);
headers.pixelStart = file.readUInt32LE(10);
headers.colors = file.readUInt32LE(46);

console.log('first color: ' + file[54]);

console.log(headers);
