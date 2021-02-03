const postcss = require("gulp-postcss");
const gulp = require("gulp");
const gulpSass = require('gulp-sass')
const config = require("../config");
const styles = () => {
  const paths = {
    src: config.styles.src,
    dest: config.styles.dest,
  };
  return gulp.src(paths.src).pipe(postcss()).pipe(gulp.dest(paths.dest));
};
gulp.task("styles", styles);
