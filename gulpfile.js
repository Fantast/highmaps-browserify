var gulp = require('gulp');
var concat = require('gulp-concat');
var wrap = require('gulp-wrap');
var rename = require('gulp-rename');

gulp.task('map', function() {
  return gulp.src('./node_modules/highmaps-release/modules/map.src.js')
      .pipe(wrap({ src: './templates/module.txt'}))
      .pipe(rename('map.js'))
      .pipe(gulp.dest('./modules'));
});

gulp.task('highmaps', ['map'], function () {
  return gulp.src([
    './node_modules/highmaps-release/highmaps.src.js'
  ])
    .pipe(concat('index.js'))
    .pipe(wrap({ src: './templates/highmaps.txt'}))
    .pipe(gulp.dest('.'));
});

gulp.task('default', ['highmaps']);
