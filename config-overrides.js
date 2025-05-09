const path = require("path");

module.exports = {
  webpack: (config) => {
    config.output.path = path.resolve(__dirname, "dist"); // Change output directory to "dist"
    return config;
  },
};