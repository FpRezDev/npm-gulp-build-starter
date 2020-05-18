const { series } = require("gulp");
const config = require("../config/css.json");

function lintCss(cb) {
  console.log("Linting Css");
  return cb();
}

function buildCss(cb) {
  console.log("Building Css");
  return cb();
}

function cleanCss(cb) {
  console.log("Cleaning Css");
  return cb();
}

function logCssConfig(cb) {
  console.log("---------- CSS CONFIG ------------");
  console.log(config);
  return cb();
}

exports.buildCss = series(lintCss,buildCss);
exports.cleanCss = cleanCss;
exports.lintCss = lintCss;
exports.logCssConfig = logCssConfig;
