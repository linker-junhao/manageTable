import ManageTable from './src/ManageTable'
import mergeWebpackConfig from "vue-styleguidist/lib/scripts/utils/mergeWebpackConfig";

export const manageTableGlobalConfigUtil = {
  install(vue, config){
    Object.defineProperties(vue.prototype, { '$manageTableGlobalConfig': { config }})
    Object.defineProperties(
      vue.prototype,
      {
        '$manageTableGlobalConfigModify': {
          value: (config) => {
            Object.defineProperties(vue.prototype, {
                '$manageTableGlobalConfig': {
                  value: mergeWebpackConfig(vue.prototype.$manageTableGlobalConfig, config)
                }
            })
          }
        }
      }
    )
  }
}

export default ManageTable

