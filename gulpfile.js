var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('jshint', function() {
    "use strict";
    return gulp.src([
            './test/**/*.js',
            './lib/**/*.js',
            'index.js',
            'gulpfile.js',
            'package.json'
        ])
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-reporter-jscs'))
        .pipe(jshint.reporter('fail'));
});

gulp.task('default', ['jshint'], function() {});
