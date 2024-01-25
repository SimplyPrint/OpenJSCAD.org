const { flatten } = require('@simplyprint/jscad-array-utils')

const hullChain = (...objects) => {
  objects = flatten(objects)
  return { children: objects, type: 'hullChain', params: undefined }
}

module.exports = hullChain
