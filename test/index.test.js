/* eslint-env mocha */
'use strict'

const fs = require('fs')
const path = require('path')
const expect = require('chai').expect
const Vinyl = require('vinyl')
const lqipBase64 = require('..')

describe('gulp-lqip-base64', () => {
  it('works for me', done => {
    const getFile = filePath => {
      filePath = path.join(__dirname, 'fixtures', filePath).replace(/\\/g, '/')
      if (!path.extname(filePath)) filePath += '.html'
      return new Vinyl({
        base: path.dirname(filePath),
        path: filePath,
        contents: fs.readFileSync(filePath)
      })
    }

    const stream = lqipBase64({ attribute: 'srcset' })
    stream.on('error', err => done(err))
    stream.on('data', file => {
      expect(String(file.contents)).to.equal(
        String(getFile('expected').contents)
      )
      done()
    })
    stream.write(getFile('test'))
    stream.end()
  })
})
