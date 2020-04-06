# DXF Object Model / Color

DXF color index mappings.


## Installation

```bash
$ npm i dxfom/color
```


## Usage

```javascript
const colorIndex = 1 // 0 - 255

import { DXF_COLOR_RGB } from '@dxfom/color/rgb'
console.log(DXF_COLOR_RGB[colorIndex]) // [255, 0, 0]

import { DXF_COLOR_HEX } from '@dxfom/color/hex'
console.log(DXF_COLOR_HEX[colorIndex]) // "#ff0000"

import { DXF_COLOR_HSL } from '@dxfom/color/hsl'
console.log(DXF_COLOR_HSL[colorIndex]) // [0, 100, 50]
```


## Source

https://gohtx.com/acadcolors.php


## License

GPL 3.0
