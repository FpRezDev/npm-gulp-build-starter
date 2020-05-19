const { src, dest } = require("gulp");
const config = require("../config/libs.json");
const del = require("del");
const merge = require("merge-stream");

function buildLibs() {
  console.log("Building Libs");
  var tasks = config.map(
    function(lib)
    {
      console.log(`Copying: ${lib.src}`);
      console.log(`To: ${lib.dest}`);
      return src(lib.src)
                .pipe(dest(lib.dest));
    }
  );
  return merge(tasks);
}

function cleanLibs() {
  console.log("Cleaning Libs: assets/libs/");
  return del("assets/libs/");
}

function logLibsConfig(cb) {
  console.log("---------- Libs CONFIG ------------");
  console.log(config);
  return cb();
}

exports.buildLibs = buildLibs;
exports.cleanLibs = cleanLibs;
exports.logLibsConfig = logLibsConfig;
