const path = require("path");
const BASE = process.env.PWD || process.cwd();
module.exports = {
  root: {
    base: BASE,
    src: "src",
    dest: "public",
  },
  html: {
    src: `${BASE}/src/html/**/*`,
    includes: `${BASE}/src/html`,
    watch: `${BASE}/src/html/**/*`,
    dest: `${BASE}/public`,
  },
  fonts: {
    src: `${BASE}/src/fonts/**/*`,
    dest: `${BASE}/public/fonts`,
  },
  images: {
    src: `${BASE}/src/images/**/*`,
    dest: `${BASE}/public/images`,
  },
  styles: {
    src: `${BASE}/src/styles/app.css`,
    dest: `${BASE}/public/styles`,
  },
  scripts: {
    src: `${BASE}/src/js/app.js`,
    dest: `${BASE}/public/js`,
  },
};
