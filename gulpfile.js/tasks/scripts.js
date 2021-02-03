const gulp = require("gulp");
const path = require("path");
const browserSync = require("browser-sync");
const changed = require("gulp-changed");
const config = require("../config");

const scripts = () => {
  const paths = {
    src: config.scripts.src,
    dest: config.scripts.dest,
  };

  return gulp
    .src(paths.src)
    .pipe(changed(paths.dest))
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream());
};
gulp.task("scripts", scripts);
module.exports = scripts;
