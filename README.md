# DXF Object Model / Color

DXF color index mappings.


## Installation

```bash
$ npm i dxfom/color
```


## Usage

```javascript
const colorIndex = 1 // 0 - 255

const { DXF_COLOR_RGB } = require('@dxfom/color/rgb')
console.log(DXF_COLOR_RGB[colorIndex]) // [255, 0, 0]

const { DXF_COLOR_HEX } = require('@dxfom/color/hex')
console.log(DXF_COLOR_HEX[colorIndex]) // "#ff0000"

const { DXF_COLOR_HSL } = require('@dxfom/color/hsl')
console.log(DXF_COLOR_HSL[colorIndex]) // [0, 100, 50]
```


## License

Undecided yet.


## Source

http://gohtx.com/acadcolors.php
