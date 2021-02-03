const gulp = require("gulp");
const path = require("path");
const config = require("../config");

const watch = () => {
  const paths = {
    html: config.html.watch,
    styles: config.styles.src,
    fonts: config.fonts.src,
    images: config.images.src,
    scripts: config.scripts.src,
  };
  console.log({ paths });
  let watchOpts = {
    events: "all",
  };
  for (var task in paths) {
    gulp.watch(paths[task], watchOpts, gulp.task(task));
  }
};
gulp.task("watch", watch);

module.exports = watch;
