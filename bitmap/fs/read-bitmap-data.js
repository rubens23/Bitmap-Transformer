const fs = require('fs');

let bitmap = fs.readFileSync(__dirname + '/' + process.argv[2]);
let bitmapData = {};
