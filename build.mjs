import fs from 'fs'
import path from 'path'
import url from 'url'
import rgb2hex from 'pure-color/convert/rgb2hex.js'
import rgb2hsl from 'pure-color/convert/rgb2hsl.js'
import { DXF_COLOR_RGB } from './rgb.mjs'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))

fs.promises.writeFile(
  path.resolve(__dirname, 'hex.mjs'),
  'export const DXF_COLOR_HEX = ' + JSON.stringify(DXF_COLOR_RGB.map(rgb2hex), undefined, 2),
  'utf8',
)

const round = n => Math.round(n * 100) / 100

fs.promises.writeFile(
  path.resolve(__dirname, 'hsl.mjs'),
  'export const DXF_COLOR_HSL = [\n' + DXF_COLOR_RGB.map(rgb2hsl).map(([h, s, l]) => `  [${round(h)}, ${round(s)}, ${round(l)}],`).join('\n') + '\n]\n',
  'utf8',
)
