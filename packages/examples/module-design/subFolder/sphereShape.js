/*
// title       : Modular Project Design Example
// author      : Moissette Mark, Simon Clark
// license     : MIT License
// description : Demonstrating the structure of a multi-file project
// file        : sphereShape.js
// tags        : project, module, code, files, subfolder
*/

const { sphere } = require('@simplyprint/jscad-modeling').primitives
const { colorize } = require('@simplyprint/jscad-modeling').colors
const { translateZ } = require('@simplyprint/jscad-modeling').transforms

const sphereShape = (radius) => colorize([1, 0, 0, 1], translateZ(radius, sphere({ radius })))

module.exports = sphereShape
