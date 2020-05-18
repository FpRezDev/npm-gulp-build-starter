const { series, parallel } = require("gulp");
const { buildLibs, cleanLibs, logLibsConfig } = require("./build/libs");
const { buildCss, cleanCss, logCssConfig, lintCss } = require("./build/css");
const { buildJs, cleanJs, logJsConfig, lintJs } = require("./build/js");

module.exports.logConfig = parallel(logLibsConfig, logCssConfig, logJsConfig);
module.exports.logLibsConfig = logLibsConfig;
module.exports.logCssConfig = logCssConfig;
module.exports.logJsConfig = logJsConfig;

module.exports.clean = parallel(cleanLibs, cleanCss, cleanJs);
module.exports.cleanLibs = cleanLibs;
module.exports.cleanCss = cleanCss;
module.exports.cleanJs = cleanJs;

module.exports.lint = parallel(lintCss,lintJs);
module.exports.lintCss = lintCss;
module.exports.lintJs = lintJs;

module.exports.build = series(
  parallel(logLibsConfig, logCssConfig, logJsConfig),
  parallel(buildLibs, buildCss, buildJs)
);
module.exports.buildLibs = buildLibs;
module.exports.buildCss = buildCss;
module.exports.buildJs = buildJs;
