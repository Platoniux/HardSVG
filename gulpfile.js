var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();

gulp.task('sass', function() {
  return gulp.src('src/scss/main.scss')
  .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
  .pipe(gulp.dest('src/css'))
  .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "src/"
    });

    gulp.watch("src/scss/**/*.scss", ['sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});


gulp.task('default', ['serve']);