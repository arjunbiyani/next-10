
module.exports = {
    future: {
        webpack5: true
    },
    
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Note: we provide webpack above so you should not `require` it
      // Perform customizations to webpack config
      const { ModuleFederationPlugin } = options.webpack.container;
      config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
  
      // Important: return the modified config
      return config
    },
  }

  