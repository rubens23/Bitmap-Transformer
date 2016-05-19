const expect = require('chai').expect;
const bitmap = require('../bitmap');

describe('Buffer Data', () => {
  it('should read in information as a buffer', () => {
    expect(Buffer.isBuffer(bitmap)).to.eql(true);
  });
});
