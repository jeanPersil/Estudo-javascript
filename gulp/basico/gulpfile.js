const gulp = require("gulp");
const { functionsIn } = require("lodash");
const series = gulp.series;

function copiar(cb) {
  console.log("Tarefa de copiar!");
  gulp
    .src(["pastaA/arquivo1.txt", "pastaA/arquivo2.txt"])
    .pipe(gulp.dest("pastaB"));
  return cb();
}""

module.exports.default = series(copiar);
