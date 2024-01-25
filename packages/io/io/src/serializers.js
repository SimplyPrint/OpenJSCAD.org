import * as mf3Serializer from '@simplyprint/jscad-3mf-serializer'
import * as dxfSerializer from '@simplyprint/jscad-dxf-serializer'
import * as jsonSerializer from '@simplyprint/jscad-json-serializer'
import * as objSerializer from '@simplyprint/jscad-obj-serializer'
import * as stlSerializer from '@simplyprint/jscad-stl-serializer'
import * as svgSerializer from '@simplyprint/jscad-svg-serializer'
import * as x3dSerializer from '@simplyprint/jscad-x3d-serializer'

// default serializer
const defaultSerialize = (options, ...objects) => objects

export const serializers = {}
serializers[mf3Serializer.mimeType] = mf3Serializer.serialize
serializers[dxfSerializer.mimeType] = dxfSerializer.serialize
serializers[jsonSerializer.mimeType] = jsonSerializer.serialize
serializers[objSerializer.mimeType] = objSerializer.serialize
serializers[stlSerializer.mimeType] = stlSerializer.serialize
serializers[svgSerializer.mimeType] = svgSerializer.serialize
serializers[x3dSerializer.mimeType] = x3dSerializer.serialize

serializers['application/javascript'] = defaultSerialize
