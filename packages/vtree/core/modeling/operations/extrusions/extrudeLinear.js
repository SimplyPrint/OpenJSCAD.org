const { flatten } = require('@simplyprint/jscad-array-utils')

const extrudeLinear = (params, ...objects) => {
  objects = flatten(objects)
  return { children: objects, type: 'extrudeLinear', params }
}

module.exports = extrudeLinear
