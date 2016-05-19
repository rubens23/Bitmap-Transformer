const gulp = require ('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

gulp.task('default',['lint','Mocha','watch'], () => {

});

gulp.task('lint', () => {
  gulp.src([
    './bitmap.js',
    './gulpfile.js',
    './test/test.js'
  ])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.results(function(results) {
    console.log('Total results: ' + results.length);
    console.log('Total warnings: ' + results.warningCount);
    console.log('Total errors: ' + results.errorCount);
  }));
});

gulp.task('Mocha', () => {
  gulp.src('./test/test.js')
  .pipe(mocha());
});

gulp.task('watch', () => {
  gulp.watch(['./*.js','./test*.js'],['lint','Mocha']);
});
