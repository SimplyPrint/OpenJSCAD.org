const { flatten } = require('@simplyprint/jscad-array-utils')

const offset = (params, ...objects) => {
  objects = flatten(objects)
  return { children: objects, type: 'offset', params }
}

module.exports = offset
