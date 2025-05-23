const gulp = require("gulp");
const webserver = require("gulp-webserver");
const watch = require("gulp-watch");

function monitorar() {
  watch("src/**/*.html", gulp.series("appHTML"));
  watch("src/**/*.css", gulp.series("appCSS"));
  watch("src/**/*.js", gulp.series("appJS"));
  watch("src/assets/imgs/**/*.*", gulp.series("appIMG"));
}
function servidor() {
  return gulp.src("build").pipe(
    webserver({
      port: 8080,
      open: true,
      livereload: true,
    })
  );
}

module.exports = {
  monitorar,
  servidor,
};
