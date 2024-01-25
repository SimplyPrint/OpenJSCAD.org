const { flatten } = require('@simplyprint/jscad-array-utils')

const center = (params, ...objects) => {
  objects = flatten(objects)
  return { children: objects, type: 'center', params }
}

module.exports = center
