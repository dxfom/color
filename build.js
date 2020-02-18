const fs = require('fs')
const path = require('path')
const rgb2hex = require('pure-color/convert/rgb2hex.js')
const rgb2hsl = require('pure-color/convert/rgb2hsl.js')
const { DXF_COLOR_RGB } = require('./rgb.js')

fs.promises.writeFile(
  path.resolve(__dirname, 'hex.js'),
  'exports.DXF_COLOR_HEX = ' + JSON.stringify(DXF_COLOR_RGB.map(rgb2hex), undefined, 2),
  'utf8',
)

const round = n => Math.round(n * 100) / 100

fs.promises.writeFile(
  path.resolve(__dirname, 'hsl.js'),
  'exports.DXF_COLOR_HSL = [\n' + DXF_COLOR_RGB.map(rgb2hsl).map(([h, s, l]) => `  [${round(h)}, ${round(s)}, ${round(l)}],`).join('\n') + '\n]\n',
  'utf8',
)
