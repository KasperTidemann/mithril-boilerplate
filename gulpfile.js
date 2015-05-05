// Requires:
var concat = require('gulp-concat');
var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

// Setup:
gulp.task('css', function() {
  return gulp.src('css/**/*.css')
    .pipe(concat('min.css'))
    .pipe(minifycss())
    .pipe(gulp.dest('html/css'))
});

gulp.task('js', function() {
  return gulp.src([
    'vendor/js/localforage/dist/localforage.js',
    'vendor/js/mithril/mithril.js',
    'vendor/js/moment/moment.js',
    'vendor/js/velocity/velocity.js',
    'js/helpers/**/*.js',
    'js/models/**/*.js',
    'js/templates/**/*.js',
    'js/components/*.js',
    'js/components/**/*.js',
    'js/routes/**/*.js'])
    /*
      Optionally, uglify at some point:

      .pipe(uglify())
    */
    .pipe(concat('min.js'))
    .pipe(gulp.dest('go/static/js'));
});

gulp.task('scss', function() {
  return gulp.src('scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
  gulp.watch(['css/**/*.css'], ['css']);
  gulp.watch(['js/**/*.js'], ['js']);
  gulp.watch(['scss/**/*.scss'], ['scss']);
});

gulp.task('default', ['watch']);
