const { flatten } = require('@simplyprint/jscad-array-utils')

const expand = (params, ...objects) => {
  objects = flatten(objects)
  return { children: objects, type: 'expand', params }
}

module.exports = expand
