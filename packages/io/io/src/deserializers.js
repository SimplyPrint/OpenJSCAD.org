import * as mf3DeSerializer from '@simplyprint/jscad-3mf-deserializer'
import * as dxfDeSerializer from '@simplyprint/jscad-dxf-deserializer'
import * as jsonDeSerializer from '@simplyprint/jscad-json-deserializer'
import * as objDeSerializer from '@simplyprint/jscad-obj-deserializer'
import * as stlDeSerializer from '@simplyprint/jscad-stl-deserializer'
import * as svgDeSerializer from '@simplyprint/jscad-svg-deserializer'
import * as x3dDeSerializer from '@simplyprint/jscad-x3d-deserializer'

export const deserializers = {}
deserializers[mf3DeSerializer.mimeType] = mf3DeSerializer.deserialize
deserializers[dxfDeSerializer.mimeType] = dxfDeSerializer.deserialize
deserializers[jsonDeSerializer.mimeType] = jsonDeSerializer.deserialize
deserializers[objDeSerializer.mimeType] = objDeSerializer.deserialize
deserializers[stlDeSerializer.mimeType] = stlDeSerializer.deserialize
deserializers[svgDeSerializer.mimeType] = svgDeSerializer.deserialize
deserializers[x3dDeSerializer.mimeType] = x3dDeSerializer.deserialize
