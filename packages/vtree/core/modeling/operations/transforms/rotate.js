const { flatten } = require('@simplyprint/jscad-array-utils')

const rotate = (params, ...objects) => {
  objects = flatten(objects)
  return { children: objects, type: 'rotate', params }
}

module.exports = rotate
