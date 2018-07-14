var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
 
gulp.task('watch', function () {
    return watch('scss/styles.scss', { ignoreInitial: false })
    .pipe(sass())
    .pipe(gulp.dest('css'));
});

gulp.task('task-name', function() {
  return gulp.src('source-files') // Get source files with gulp.src
    .pipe(aGulpPlugin()) // Sends it through a gulp plugin
    .pipe(gulp.dest('destination')) // Outputs the file in the destination folder
})
  // place code for your default task here

gulp.task('sass', function(){
  return gulp.src('scss/styles.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('css'))
});
