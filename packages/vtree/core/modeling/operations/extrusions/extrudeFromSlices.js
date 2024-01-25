const { flatten } = require('@simplyprint/jscad-array-utils')

const extrudeFromSlices = (params, ...objects) => {
  objects = flatten(objects)
  return { children: objects, type: 'extrudeFromSlices', params }
}

module.exports = extrudeFromSlices
