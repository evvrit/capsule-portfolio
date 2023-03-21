const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  "fontawesome-svg-core": {
    license: "free",
  },
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
