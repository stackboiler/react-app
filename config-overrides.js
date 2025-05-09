// filepath: /home/vr-one/react-app/config-overrides.js
const path = require("path");

module.exports = {
  webpack: (config) => {
    config.output.path = path.resolve(__dirname, "dist");
    return config;
  },
};