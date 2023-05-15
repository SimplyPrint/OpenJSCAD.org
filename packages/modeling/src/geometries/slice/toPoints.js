/**
 * Produces an array of vertices from the given slice.
 * The returned array should not be modified as the data is shared with the slice.
 * @param {slice} slice - the slice
 * @returns {Array} an array of 3D vertices
 * @alias module:modeling/geometries/slice.toPoints
 *
 * @example
 * let sharedPoints = toPoints(slice)
 */
export const toPoints = (slice) => {
  const vertices = []
  slice.contours.forEach((contour) => {
    contour.forEach((vertex) => {
      vertices.push(vertex)
    })
  })
  return vertices
}
