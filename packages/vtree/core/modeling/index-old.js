/* eslint-disable */
const { toArray, flatten } = require('@simplyprint/jscad-array-utils')

const colors = (params, ...objects) => {
  objects = flatten(objects)
  return { children: objects, type: 'colors', params }
}

// attempt at workaround for non tree items that need access to data before final evaluation
const specials = []
const measureArea = require('./api-measurements').makeMeasureArea(specials)
const measureVolume = require('./api-measurements').makeMeasureVolume(specials)
const measureBounds = require('./api-measurements').makeMeasureBounds(specials)

// not sure about this one
/* const vector_text = (...params) => {
  console.log('vector_text',params)
  return params
  // return {type: 'vector_text', params}
} */

// this is a convenience object, that mimics the structure of the jscad functional api
const apiClone = {
  primitives3d: {
    cube,
    sphere,
    cylinder
  },
  primitives2d: {
    circle,
    square
  },
  booleanOps: {
    union,
    difference,
    intersection
  },
  transformations: {
    translate,
    rotate,
    scale,
    mirror,
    contract,
    hull,
    chain_hull
  },
  extrusions: {
    linear_extrude,
    rotate_extrude,
    rectangular_extrude
  },
  text: {
    vector_text: require('@simplyprint/jscad-csg/api').text.vector_text
  },

  measurements: {
    measureArea,
    measureVolume,
    measureBounds
  },

  colors: Object.assign({}, require('@simplyprint/jscad-csg/api').colors, { colors }),
  csg: require('@simplyprint/jscad-csg/api').csg,
  // these are obsolete, but keeping the same API for now ...
  maths: require('@simplyprint/jscad-csg/api').maths,
  OpenJsCad: require('@simplyprint/jscad-csg/api').OpenJsCad,
  debug: require('@simplyprint/jscad-csg/api').debug

}

module.exports = {
  apiClone,

  cube,
  sphere,
  cylinder,

  square,
  circle,

  union,
  difference,
  intersection,

  translate,
  rotate,
  scale,
  mirror,
  hull,
  chain_hull,
  contract,
  expand,

  linear_extrude,
  rectangular_extrude,

  colors,

  measureArea,
  measureVolume,
  measureBounds,

  // separate
  specials
}
