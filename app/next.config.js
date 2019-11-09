const path = require("path");
const withBundleAnalyzer = require("@next/bundle-analyzer");

module.exports = withBundleAnalyzer({ enabled: process.env.ANALYZE === "true" })({
  webpack: config => {

    // Override the js loader so that it transpiles files outside the main next.js project folder
    const jsRule = config.module.rules.find(rule => rule.test.test(".jsx"));
      jsRule.include = [
        ...jsRule.include,
        // Transpile the ui folder
        path.resolve(__dirname, "../ui"),
      ];


    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    config.resolve.alias = {
      "@ui": path.resolve(__dirname, "../ui"),
    }
    return config
  }
});
