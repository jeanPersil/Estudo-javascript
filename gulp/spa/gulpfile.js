const { series, parallel } = require("gulp");
const gulp = require("gulp");

const { appHTML, appCSS, appJS, appIMG } = require("./gulpTasks/app.js");
const { depsCSS, depsFonts } = require("./gulpTasks/deps.js");
const { monitorar, servidor } = require("./gulpTasks/servidor.js");

module.exports.default = series(
  parallel(series(appHTML, appCSS, appJS, appIMG), series(depsCSS, depsFonts)),
  servidor,
  monitorar
);
