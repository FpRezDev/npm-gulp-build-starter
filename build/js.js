const { series } = require("gulp");
const config = require("../config/js.json");

function lintJs(cb) {
  console.log("Linting Js");
  return cb();
}

function buildJs(cb) {
  console.log("Building Js");
  return cb();
}

function cleanJs(cb) {
  console.log("Cleaning Js");
  return cb();
}

function logJsConfig(cb) {
  console.log("---------- JS CONFIG ------------");
  console.log(config);
  return cb();
}

exports.buildJs = series(lintJs, buildJs);
exports.cleanJs = cleanJs;
exports.lintJs = lintJs;
exports.logJsConfig = logJsConfig;
