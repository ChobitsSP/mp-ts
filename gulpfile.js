const gulp = require('gulp');
const exec = require('child_process').exec;
const alias = require('gulp-ts-path-alias');

gulp.task('tsc', function (cb) {
  exec('npm run tsc', function (err, stdout, stderr) {
    if (err != null) {
      console.log(stdout);
      console.log(stderr);
    }
    cb(err);
  });
});

gulp.task('alias', function () {
  return gulp.src(['src/**/*.js'])
    .pipe(alias('.', {
      "@/*": ["src/*"]
    }))
    .pipe(gulp.dest('src'));
});

gulp.task('default', function () {
  return gulp.watch('src/**/*.ts', {}, gulp.series('tsc', 'alias'))
});
