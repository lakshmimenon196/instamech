'use strict';
//dependencies
var { series } = require('gulp');
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');


////////////////
// SCSS/CSS - source and destination
////////////////


var SCSS_SRC = './src/Assets/scss/**/*.scss';
var SCSS_DEST= './src/Assets/css';

// Compile SCSS

//task deprecated after gulp 4.0 - using series instead
gulp.task('compile_scss', function(done){
gulp.src(SCSS_SRC)
.pipe(sass().on('error',sass.logError))
.pipe(minifyCSS())
.pipe(rename({suffix:'.min'}))
.pipe(changed(SCSS_DEST))
.pipe(gulp.dest(SCSS_DEST));
done();
});

//detect changes in SCSS
gulp.task('watch_scss', function(done){
  gulp.watch(SCSS_SRC,gulp.series('compile_scss'));
  done();
});

// Run tasks
gulp.task('default',gulp.series('watch_scss'));

/*

---- Original
gulp.task('compile_scss', function(){
gulp.src(SCSS_SRC)
.pipe(sass().on('error',sass.logError))
.pipe(minifyCSS())
.pipe(rename({suffix:'.min'}))
.pipe(changed(SCSS_DEST))
.pipe(gulp.dest(SCSS_DEST));

});

//detect changes in SCSS
gulp.task('watch_scss', function(){
  gulp.watch(SCSS_SRC,['compile_scss']);
});

// Run tasks
gulp.task('default',['watch_scss']);
----
var compile_scss = ()=> { gulp.src(SCSS_SRC)
.pipe(sass().on('error',sass.logError))
.pipe(minifyCSS())
.pipe(rename({suffix:'.min'}))
.pipe(changed(SCSS_DEST))
.pipe(gulp.dest(SCSS_DEST));

};
gulp.task('compile_scss',compile_scss);
var watch_scss = ()=>{
  gulp.watch(SCSS_SRC,compile_scss);

};
gulp.task('watch',watch_scss)
gulp.task('default',gulp.series('compile_scss','watch'))
//exports.default = //gulp.series(watch_scss,compile_scss);
*/
/*
function compile_scss()
{
  return (gulp.src(SCSS_SRC)
  .pipe(sass().on('error',sass.logError))
  .pipe(minifyCSS())
  .pipe(rename({suffix:'.min'}))
  .pipe(changed(SCSS_DEST))
  .pipe(gulp.dest(SCSS_DEST)));
}
gulp.task('compile_scss',compile)
*/
