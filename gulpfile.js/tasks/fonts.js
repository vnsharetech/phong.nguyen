const gulp = require("gulp");
const path = require("path");
const browserSync = require("browser-sync");
const changed = require("gulp-changed");
const config = require("../config");

const fonts = () => {
  const paths = {
    src: config.fonts.src,
    dest: config.fonts.dest,
  };

  return gulp
    .src(paths.src)
    .pipe(changed(paths.dest))
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream());
};
gulp.task("fonts", fonts);
module.exports = fonts;
