exports = module.exports = {};

const fs = require('fs');

const file = fs.readFileSync(__dirname + '/img/non-palette-bitmap.bmp');

const headers = {};

headers.type = file.toString('ascii', 0, 2);
headers.size = file.readUInt32LE(2);
headers.pixelStart = file.readUInt32LE(10);
headers.colors = file.readUInt32LE(46);

console.log(headers);

var byteArray = exports.byteArray =[];

for(i=headers.PixelStart; i<headers.Size; i++) {
  byteArray.push(bitmap[i]);
}

var newbyte = exports.newbyte =[];
for(i=0; i<byteArray.length; i++) {
  if(byteArray[i] === 0){
    newbyte.push(110);
  }
  else {
    newbyte.push(byteArray[i]);
  }
}

headerBit = file.slice(0,54);

xformBuf = Buffer.from(newbyte);

newImg = exports.newImg = Buffer.concat([headerBit,xformBuf]);

console.log(newImg);

console.log('byteArray length: ' + byteArray.length);
console.log('byteArray length * 6: ' + byteArray.length*6);
console.log('new image length: ' + newImg.length);
console.log('header bit length: ' + headerBit.length);
console.log('xformBuf length: ' + xformBuf.length);

console.log('bitmap ' + file.slice(40,80));
console.log('newImg ' + newImg.slice(40,80));

fs.writeFile('/img/new-bitmap.bmp',newImg,(err)=> {
  if (err) throw err;
  console.log('success!');
});
