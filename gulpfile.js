var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

    function style(){
        return gulp.src('./css/main.scss')
                // .pipe(plumber({
                //     errorHandler: notify.onError(function(error) {
                //         return {
                //             title: 'Styles',
                //         message: error.message
                //         };
                //     })}))
                .pipe(sass().on('error', sass.logError))
                .pipe(sass({outputStyle: 'compressed'}))
                .pipe(gulp.dest('./css'));
    } 

    function watch(){
        gulp.watch('./**/.scss', style);
    }

    function serve(){
        browserSync.init({
            server: {
                baseDir: './'
            }
        });
        browserSync.watch('./*.{css}', browserSync.reload);
    };

    gulp.task('default', gulp.parallel(
        gulp.series(style,
            watch,),
        serve
    ));

exports.style = style;