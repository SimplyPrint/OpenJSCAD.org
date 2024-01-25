const { flatten } = require('@simplyprint/jscad-array-utils')

const difference = (...objects) => {
  objects = flatten(objects)
  return { children: objects, type: 'difference', params: undefined }
}

module.exports = difference
