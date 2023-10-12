const { composePlugins, withNx } = require('@nx/next');

module.exports = composePlugins([
  withNx({
    // Nx configuration goes here
    nx: {
      svgr: false,
    },
    // Add Next.js configuration goes here
  })
]);
