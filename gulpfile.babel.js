import gulp from 'gulp';
import mocha from 'gulp-mocha';

// babel = require('babel-register');



gulp.task('test', function() {
  return gulp.src(['test/*.js'])
    .pipe(mocha({
      compilers: "babel-core/register"
    }));
});
gulp.task('tdd', function() {
  return gulp.watch(['src/*.js', 'test/*.js'], ['test']);
})


// var gulp = require('gulp');
// var sourcemaps = require('gulp-sourcemaps');
// var babel = require('gulp-babel');
// var mocha = require('gulp-mocha');
// var batch = require('gulp-batch');
// var concat = require('gulp-concat');
//
// gulp.task('default', function() { //Use Babel 6.0.0 to transpile application code.
//   return gulp.src("./src/*.js")
//     .pipe(sourcemaps.init())
//     .pipe(babel())
//     .pipe(concat("all.js"))
//     .pipe(sourcemaps.write("."))
//     .pipe(gulp.dest("dist"));
// });
//
// gulp.task('buildTests', ['default'], function() { //Use Babel 6.0.0 to transpile test code.
//   return gulp.src("./tests/*.js")
//     .pipe(sourcemaps.init())
//     .pipe(babel())
//     .pipe(gulp.dest("built-tests"));
// });
//
// gulp.task('test', ['buildTests'], function() {
//   var mocha = require('gulp-mocha');
//   gulp.src("./built-tests/test.js", {
//       read: false
//     })
//     .pipe(mocha({
//       reporter: 'nyan'
//     }));
// });
