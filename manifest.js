module.exports = {
  version: '1.2.3',
  init: (pluginContext) => {
     pluginContext.registerPolicy(require('./policies/ip-whitelist.policy'))
  },
  policies: ['ip-whitelist'],
  schema: {
    $id: 'N/A',
  }
}
