/* eslint-env mocha */
'use strict'

const fs = require('fs')
const should = require('should')
const Vinyl = require('vinyl')
const lqipBase64 = require('..')

describe('gulp-lqip-base64', () => {
  it('Should transform images in test.html, making it equal to expected.html', done => {
    const testHtml = new Vinyl({
      base: 'test/',
      path: 'test/test.html',
      contents: fs.readFileSync('test/test.html')
    })

    const expectedHtml = new Vinyl({
      base: 'test/',
      path: 'test/expected.html',
      contents: fs.readFileSync('test/expected.html')
    })

    const stream = lqipBase64({ attribute: 'srcset' })

    stream.on('error', err => {
      should.exist(err)
      done(err)
    })

    stream.on('data', file => {
      should.exist(file)
      should.exist(file.contents)

      should.equal(String(file.contents), String(expectedHtml.contents))
      done()
    })

    stream.write(testHtml)
    stream.end()
  })
})
