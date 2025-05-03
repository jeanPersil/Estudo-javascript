const { series } = require("gulp");
const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");


function padrao(callBack) {
  gulp
    .src("src/**/*.js")
    .pipe(
      babel({
        comments: false,
        presets: ["env"],
      })
    )
    .pipe(uglify())
    .pipe(concat("codigo.min.js"))
    .pipe(gulp.dest("build"));

  return callBack();
}

function fim(cb) {
  console.log("Fim");
  return cb();
}

exports.default = gulp.parallel(padrao, fim);
