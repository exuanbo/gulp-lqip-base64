# gulp-lqip-base64

> Parses HTML files to find `<img>` tags and adds an attribute to them which contains their Base64 representation.

[![npm (scoped)](https://img.shields.io/npm/v/gulp-lqip-base64.svg?style=flat-square)](https://www.npmjs.com/package/gulp-lqip-base64)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](https://standardjs.com)
[![Travis (.com)](https://img.shields.io/travis/com/exuanbo/gulp-lqip-base64/master.svg?style=flat-square)](http://travis-ci.com/exuanbo/gulp-lqip-base64)
[![David](https://img.shields.io/david/exuanbo/gulp-lqip-base64.svg?style=flat-square)](https://david-dm.org/exuanbo/gulp-lqip-base64)
[![License](https://img.shields.io/github/license/exuanbo/gulp-lqip-base64.svg?style=flat-square)](https://github.com/exuanbo/gulp-lqip-base64/blob/master/LICENSE)

## Demo

<https://exuanbo.github.io/gulp-lqip-base64/>

## Install

```shell
npm install --save-dev gulp-lqip-base64
```

## Usage

```javascript
const { task, src, dest } = require('gulp')
const lqipBase64 = require('gulp-lqip-base64')

task('default', () => {
  return src('**/*.html', { base: '.' })
    .pipe(lqipBase64({ attribute: 'srcset' }))
    .pipe(dest('.'))
})
```

or you can

```javascript
import lqipBase64 from 'gulp-lqip-base64'
```

## Supported image types

Currently `['jpeg', 'jpg', 'png', 'bmp', 'tiff', 'gif']` are supported.

## Options

Type: `Object`

### srcAttr

- Type: `String`
- Default: `src`

Attribute which contain the image path.

### attribute

- Type: `String`
- Default: `data-src`

Attribute which will contain the Base64 representation of the image.

## Acknowledgement

Thanks [gulp-image-lqip](https://github.com/Johann-S/gulp-image-lqip) for the inspiration.

## License

[MIT](https://github.com/exuanbo/gulp-lqip-base64/blob/master/LICENSE)

## Donate

<a href="https://www.buymeacoffee.com/exuanbo" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/lato-orange.png" alt="Buy Me A Coffee" height="38.25px" width="162.75px"></a>
