/*---------------------------------------------------------------------------------------------------------------------
 REQUIREMENTS
 ---------------------------------------------------------------------------------------------------------------------*/
var gulp = require('gulp');
var bower = require('gulp-bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
//var watch = require('gulp-watch');
//var jshint = require('gulp-jshint');
//var uglify = require('gulp-uglify');
//var uglifyjs = require('gulp-uglifyjs');
//var rename = require('gulp-rename');
//var browserSync = require('browser-sync').create();
//var reload = browserSync.reload;
//var gutil = require('gulp-util');


/*---------------------------------------------------------------------------------------------------------------------
 WATCHES
 ---------------------------------------------------------------------------------------------------------------------*/
//gulp.task('watch-js', function() {
//    gulp.watch([
//        './src/app/**/*.js',
//    ], function() {
//        gulp.run(['app']);
//    });
//});

//gulp.task('watch-html-css', function() {
//    gulp.watch([
//        './styles/**/*.css',
//        './*.html'
//    ], reload);
//});

//gulp.task('watch-sass', function() {
//    gulp.watch(['./styles/sass/**'], ['sass']);
//});


/*---------------------------------------------------------------------------------------------------------------------
 TASKS
 ---------------------------------------------------------------------------------------------------------------------*/
// What will be executed when you type "gulp" in terminal
gulp.task('default', [
    'bower',
//    'app',
//    'sass',
//    'watch-js',
///    'watch-sass'
]);


// Download dependencies bower
gulp.task('bower', function() {
    return bower()
        .pipe(gulp.dest('bower_components/'))
});


// Task to reload the browser
//gulp.task('browser-sync', function() {
//    browserSync.init({
//        server: {
//            baseDir: "./"
//        }
//    });
//});


// Task to compile files with .sass extension to .css
//gulp.task('sass', function () {
//    gulp.src('./styles/sass/**/*.scss')
//        .pipe(sass().on('error', sass.logError))
//        .pipe(gulp.dest('./styles/css'));
//});


// Concatenate existing files on ./scr to ./js.app.js
//gulp.task('app', function() {
//    gulp.src([
//        './src/app/**/*.js'
//    ])
//        .pipe(concat('app.js'))
//        .pipe(gulp.dest('./src/'));
//
//    //gulp.src([
//    //    './src/app/**/*.js'
//    //])
//    //    .pipe(uglifyjs('app.min.js'))
//    //    .pipe(gulp.dest('./src/'));
//});
