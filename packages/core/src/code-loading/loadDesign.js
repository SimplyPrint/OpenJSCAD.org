import { registerAllExtensions } from '../io/registerExtensions.js'

import { transformSources } from './transformSources.js'
import { makeFakeFs } from './makeFakeFs.js'
import { makeWebRequire } from './webRequire.js'
import { normalizeDesignModule } from './normalizeDesignModule.js'
import { getParameterDefinitionsAndValues } from '../parameters/index.js'

/**
 * load a jscad script, injecting the basic dependencies if necessary
 * @param source the source code
 * @param {String} mainPath - file or directory path
 * @param {String} apiMainPath - path to main API module, i.e. '@simplyprint/jscad-modeling'
 * @param {Array} filesAndFolders - array of files and folders to use
 * @param {Object} parameterValuesOverride - the values to use to override the defaults for the current design
 */
export const loadDesign = (mainPath, apiMainPath, filesAndFolders, parameterValuesOverride) => {
  // transform the source if passed non-javascript content, i.e. stl
  filesAndFolders = transformSources({ apiMainPath }, filesAndFolders)

  if (filesAndFolders.length > 1) {
    // this only happens if several files were dragNdrop
    // FIXME throw new Error('please create a folder for multiple part projects')
    // create a file structure to house the contents
    filesAndFolders = [
      {
        fullPath: '/',
        name: '',
        children: filesAndFolders
      }
    ]
  }
  const fakeFs = makeFakeFs(filesAndFolders)

  const webRequire = makeWebRequire(filesAndFolders, { apiMainPath })

  // register all extension formats
  registerAllExtensions(fakeFs, webRequire)

  // find the root module
  let rootModule = webRequire(filesAndFolders[0].fullPath)

  rootModule = normalizeDesignModule(rootModule)

  // rootModule SHOULD contain a main() entry and optionally a getParameterDefinitions entry
  // the design (module tree) has been loaded at this stage
  // now we can get our usefull data (definitions and values/defaults)
  const parameters = getParameterDefinitionsAndValues(rootModule, parameterValuesOverride)

  return { rootModule, ...parameters }
}
