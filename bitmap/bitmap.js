const fs = require('fs');

const file = fs.readFileSync(__dirname + '/non-palette-bitmap.bmp');

const headers = {};
console.log(file.slice());

console.log(file[0], file[1]);

headers.type = file.toString('ascii', );
headers.size = file.readUint32LE();
headers.pixelStart = fileReadInt32LE();

console.log(file.readUInt8());

console.log(headers);
