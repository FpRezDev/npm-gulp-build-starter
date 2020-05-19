const { src, dest, series } = require("gulp");
const config = require("../config/css.json");
const del = require("del");
const merge = require("merge-stream");
const sass = require("gulp-sass");
sass.compiler = require('node-sass');
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const stylelint = require("gulp-stylelint");

/**
 * @todo Move all configurations to extenal json in config folder. 
 *   Proposal: config.json/plugins.json 
 */
// sass configuration
const sassConfig = {
  outputStyle: "expanded",
  sourceMap: true,
  sourceMapContents: true,
  precision: 6
};

// autoprefixer configuration
const autoprefixerConfig = {
  flexbox: "no-2009"
};

//postcss plugins config
const postcssPlugins = [
  autoprefixer(autoprefixerConfig)
];

//stylelint config
const stylelintConfig = {
  reporters: [
      { formatter: "string", console: true }
  ]
};

function lintCss() {
  console.log("Linting Css.");
  var tasks = config.map(
    function(cssConfig) {
      console.log(`Linting: ${cssConfig.src}`);
      return src(cssConfig.src)
              .pipe(stylelint(stylelintConfig))
    }
  );
  return merge(tasks);
}

function buildCss() {
  console.log("Building Css");
  var tasks = config.map(
    function(cssConfig) {
      console.log(`Building: ${cssConfig.src}`);
      console.log(`To: ${cssConfig.dest}`);
      return src(cssConfig.src)
              .pipe(sass(sassConfig).on("error", sass.logError))
              .pipe(postcss(postcssPlugins))
              .pipe(dest(cssConfig.dest));
    }
  );
  return merge(tasks);
}

function cleanCss() {
  console.log("Cleaning Css");
  return del("assets/css/");
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
