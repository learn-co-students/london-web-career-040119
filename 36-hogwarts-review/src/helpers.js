
export const getHogImageSrc = hogName => {
  const fileName = hogName.toLowerCase().replace(/\s/g, '_')
  const imageSrc = require(`./hog-imgs/${fileName}.jpg`)
  return imageSrc
}
