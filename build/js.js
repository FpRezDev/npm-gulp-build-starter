const { src, dest, series } = require("gulp");
const config = require("../config/js.json");
const merge = require("merge-stream");
const concat = require("gulp-concat");
const del = require("del");

function lintJs(cb) {
  console.log("Linting Js");
  return cb();
}

function buildJs() {
  console.log("Building Js");
  var tasks = config.map(
    function(jsConfig) {
      console.log(`Building: ${jsConfig.src}`);
      console.log(`To: ${jsConfig.dest}`);
      return src(jsConfig.src, { base: "." })
              .pipe(concat(jsConfig.dest))
              .pipe(dest("."));
    }
  );
  return merge(tasks);
}

function cleanJs() {
  console.log("Cleaning Js");
  return del("assets/js/");
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
