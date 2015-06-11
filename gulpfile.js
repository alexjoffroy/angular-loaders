// DEPENDENCIES
var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')();

// TASKS
gulp.task('lint', function() {
  gulp.src('./angular-loaders.js')
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('default'))
});

gulp.task('min', ['lint'], function() {
  gulp.src('./angular-loaders.js')
    .pipe(plugins.concat('angular-loaders.min.js'))
    .pipe(plugins.uglify())
    .pipe(gulp.dest('./'));
});
