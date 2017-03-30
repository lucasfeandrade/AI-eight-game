import gulp from 'gulp';
import mocha from 'gulp-mocha';

gulp.task('test', function() {
  return gulp.src(['test/*.js'])
    .pipe(mocha({
      compilers: "babel-core/register"
    }));
});
gulp.task('tdd', function() {
  return gulp.watch(['src/*.js', 'test/*.js'], ['test']);
})
