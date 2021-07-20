const gulp = require('gulp');
const exec = require('child_process').exec;
const alias = require('gulp-ts-path-alias');

gulp.task('tsc', function (cb) {
  exec('npm run tsc', function (err, stdout, stderr) {
    cb(err);
  });
});

gulp.task('alias', function () {
  return gulp.src(['miniprogram/**/*.js'])
    .pipe(alias('.', {
      "@/*": ["miniprogram/*"]
    }))
    .pipe(gulp.dest('miniprogram'));
});

gulp.task('default', function () {
  return gulp.watch('miniprogram/**/*.ts', {}, gulp.series('tsc', 'alias'))
});
