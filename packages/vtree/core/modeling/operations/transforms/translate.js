const { flatten } = require('@simplyprint/jscad-array-utils')

const translate = (params, ...objects) => {
  objects = flatten(objects)
  return { children: objects, type: 'translate', params }
}

module.exports = translate
