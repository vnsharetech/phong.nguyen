const gulp = require("gulp");
const path = require("path");
const browserSync = require("browser-sync");
const nunjucks = require("nunjucks");
const gulpnunjucks = require("gulp-nunjucks");
const config = require("../config");

const html = () => {
  const paths = {
    src: config.html.src,
    dest: config.html.dest,
  };
  const includePaths = config.html.includes;
  const options = {
    env: new nunjucks.Environment(
      new nunjucks.FileSystemLoader(includePaths, { noCache: true })
    ),
  };
  return gulp
    .src(paths.src)
    .pipe(gulpnunjucks.compile({}, options))
    .pipe(gulp.dest(paths.dest))
    .on("end", browserSync.reload);
};
gulp.task("html", html);
module.exports = html;
