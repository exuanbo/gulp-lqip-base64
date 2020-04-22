'use strict'

const path = require('path')
const cheerio = require('cheerio')
const { processImage } = require('./process-image')

const validImgExtensions = ['.jpg', '.jpeg', '.png', '.gif']

const processHtml = file =>
  new Promise((resolve, reject) => {
    // const { rootPath, attribute, srcAttr } = config
    const rootPath = process.cwd()
    const attribute = 'srcset'
    const srcAttr = 'src'

    const fileContent = String(file.contents)
    const $ = cheerio.load(fileContent)
    const imageList = $('img').toArray()

    const promiseList = imageList
      .filter(el => {
        const src = $(el).attr(srcAttr)

        // TODO: handle remote images later
        if (!src || src.startsWith('http') || src.startsWith('//')) {
          return false
        }

        const pathImg = path.join(rootPath, src)

        return validImgExtensions.includes(path.extname(pathImg).toLowerCase())
      })
      .map(el => {
        const src = $(el).attr(srcAttr)
        const pathImg = path.join(rootPath, src)

        return processImage(pathImg, src)
      })

    Promise.all(promiseList)
      .then(resultList => {
        resultList.forEach(({ originalImg, base64 }) => {
          const image = imageList.find(
            el => $(el).attr(srcAttr) === originalImg && !$(el).attr(attribute)
          )

          $(image).attr(attribute, base64)
        })

        file.contents = Buffer.from($.html())
        resolve(file)
      })
      .catch(err => reject(err))
  })

module.exports = { processHtml }
