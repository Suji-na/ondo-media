// packages
const gulp = require("gulp");
const newer = require("gulp-newer");
const fileinclude = require('gulp-file-include');
// Copy fonts
function copyFonts() {
  return gulp
    .src("./src/assets/fonts/**/*")
    .pipe(newer("./dist/assets/fonts/"))
    .pipe(gulp.dest("./dist/assets/fonts/"));
}

// Copy html
function copyHtml() {
  return gulp
    .src(['./src/**/*.html', '!./src/parts/*.html'])
    .pipe(fileinclude({
      context: {
        name: 'html'
      },
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(newer("./dist/"))
    .pipe(gulp.dest("./dist/"));
}

//copy favicon
function copyFavicon() {
  return gulp
    .src(
      "./src/assets/favicon/**/*")
    .pipe(gulp.dest("./dist/"));
}

function copyPhp() {
  return gulp
    .src("./src/*.php")
    .pipe(fileinclude({
      context: {
        name: 'php'
      },
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(newer("./dist/"))
    .pipe(gulp.dest("./dist/"));
}

function copyPhpConfig() {
  return gulp
    .src("./src/config/**/*.php")
    .pipe(newer("./dist/"))
    .pipe(gulp.dest("./dist/config/"));
}

function copyPhpLib() {
  return gulp
    .src("./src/lib/**/*.php")
    .pipe(newer("./dist/"))
    .pipe(gulp.dest("./dist/lib/"));
}

// exports
module.exports = {
  copyFonts: copyFonts,
  copyHtml: copyHtml,
  copyFavicon: copyFavicon,
  copyPhp: copyPhp,
  copyPhpConfig: copyPhpConfig,
  copyPhpLib: copyPhpLib
};