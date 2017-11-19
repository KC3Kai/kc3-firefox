const path = require('path');

module.exports = {
  entry: {
    service: ['./src/service/index.js'],
    dmm: ['./src/content/dmm.js'],
    osapi: ['./src/content/osapi.js']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'release')
  }
};
