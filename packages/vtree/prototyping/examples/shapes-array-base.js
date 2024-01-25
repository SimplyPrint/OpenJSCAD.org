const { cube, sphere } = require('@simplyprint/jscad-csg/api').primitives3d

const main = () => [cube(), sphere()]

module.exports = main
