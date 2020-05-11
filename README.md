# gulp-lqip-base64

> Parses HTML files to find `<img>` tags and adds an attribute to them which contains their Base64 representation.

[![npm (scoped)](https://img.shields.io/npm/v/gulp-lqip-base64.svg?style=flat-square)](https://www.npmjs.com/package/gulp-lqip-base64)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-yellow.svg?style=flat-square)](https://standardjs.com)
[![Travis (.com)](https://img.shields.io/travis/com/exuanbo/gulp-lqip-base64.svg?style=flat-square)](http://travis-ci.com/exuanbo/gulp-lqip-base64)
[![David](https://img.shields.io/david/exuanbo/gulp-lqip-base64.svg?style=flat-square)](https://david-dm.org/exuanbo/gulp-lqip-base64)
[![License](https://img.shields.io/github/license/exuanbo/gulp-lqip-base64.svg?style=flat-square)](https://github.com/exuanbo/gulp-lqip-base64/blob/master/LICENSE)

## Table of Contents

- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Supported files](#supported-files)
- [Options](#options)
  - [srcAttr](#srcattr)
  - [attribute](#attribute)
- [Acknowledgement](#acknowledgement)
- [License](#license)

## Demo

<https://exuanbo.github.io/gulp-lqip-base64/>

## Installation

```shell
npm install --save-dev gulp-lqip-base64
```

## Usage

```javascript
const gulp = require('gulp')
const lqipBase64 = require('gulp-lqip-base64')

gulp.task('default', () => {
  return gulp.src('**/*.html', { base: '.' })
    .pipe(lqipBase64({ attribute: 'srcset' }))
    .pipe(gulp.dest('.'))
})
```

## Supported files

Currently `['jpeg', 'jpg', 'png', 'gif']` files are supported.

## Options

Type: `Object`

### srcAttr

- Type: `String`
- Default: `src`

Attribute which contain the image.

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
