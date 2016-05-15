const gulp = equire('gulp');

gulp.task('', () => {
  gulp.src('')

});

gulp.task('default', function () {
  gulp.src('test/test.js')
    .pipe(mocha());
});
