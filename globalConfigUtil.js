import mergeWebpackConfig from "vue-styleguidist/lib/scripts/utils/mergeWebpackConfig";

const manageTableGlobalConfigUtil = {
  install(vue, config){
    Object.defineProperties(vue.prototype, { '$manageTableGlobalConfig': { value: config }})
    Object.defineProperties(
      vue.prototype,
      {
        '$manageTableGlobalConfigModify': {
          value: (modifyConfig) => {
            Object.defineProperties(vue.prototype, {
              '$manageTableGlobalConfig': {
                value: mergeWebpackConfig(vue.prototype.$manageTableGlobalConfig, modifyConfig)
              }
            })
          }
        }
      }
    )
  }
}

export default manageTableGlobalConfigUtil
