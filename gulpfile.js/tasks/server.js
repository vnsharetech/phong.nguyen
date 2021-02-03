const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const config = require("../config");
const reload = browserSync.reload;

const server = () => {
  browserSync.init({
    server: {
      baseDir: config.root.dest,
    },
  });
  gulp.watch(config.root.dest).on("change", reload);
};
// Static server
gulp.task("server", server);
module.exports = server;
