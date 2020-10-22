const { merge } = require('webpack-merge')

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
                value: merge(vue.prototype.$manageTableGlobalConfig, modifyConfig)
              }
            })
          }
        }
      }
    )
  }
}

export default manageTableGlobalConfigUtil
