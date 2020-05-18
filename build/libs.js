const { series } = require("gulp");
const config = require("../config/libs.json");

function buildLibs(cb) {
  console.log("Building Libs");
  return cb();
}

function cleanLibs(cb) {
  console.log("Cleaning Libs");
  return cb();
}

function logLibsConfig(cb) {
  console.log("---------- Libs CONFIG ------------");
  console.log(config);
  return cb();
}

exports.buildLibs = buildLibs;
exports.cleanLibs = cleanLibs;
exports.logLibsConfig = logLibsConfig;
