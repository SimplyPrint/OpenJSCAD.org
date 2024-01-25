const { cube } = require('@simplyprint/jscad-csg/api').primitives3d
const { union } = require('@simplyprint/jscad-csg/api').booleanOps

const main = () => union([cube(), cube()])

module.exports = main
