var config = require('../config');
if(!config.tasks.css) return;

var gulp      = require('gulp');
var cssmin    = require('gulp-cssmin');
var rename    = require('gulp-rename');
var concat    = require('gulp-concat');
var path      = require('path');

var paths = {
  src: path.join(config.root.src, config.tasks.css.src, '/**/*.{' + config.tasks.css.extensions + '}'),
  dest: path.join(config.root.dest, config.tasks.css.dest)
};

var cssTask = function () {
  gulp.src(paths.src)
    .pipe(concat('style.min.css'))
    .pipe(cssmin())
    .pipe(gulp.dest(paths.dest));
};

gulp.task('css', cssTask);
module.exports = cssTask;
