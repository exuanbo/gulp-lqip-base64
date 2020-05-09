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

    stream.on('error', error => {
      should.exist(error)
      done(error)
    })

    stream.on('data', file => {
      should.exist(file)
      should.exist(file.contents)

      const contents = String(file.contents)
      should.equal(contents, String(expectedHtml.contents))
      done()
    })

    stream.write(testHtml)
    stream.end()
  })
})
