const { flatten } = require('@simplyprint/jscad-array-utils')

const transform = (params, ...objects) => {
  objects = flatten(objects)
  return { children: objects, type: 'transform', params }
}

module.exports = transform
