var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var bower = require('gulp-bower');

    // postcss = require('gulp-postcss'),
    // autoprefixer = require('gulp-autoprefixer');

/*
*  Source + Destination
*   File definition
*/ 
var _styleRootDir =  './app/assets/scss';

var paths = {    
    styles: {
        watch: _styleRootDir + '/**/*.scss',
        src: _styleRootDir + '/application.scss',
        dest: './public/css'
    }
};

console.log(paths.styles.watch);

/**
 *  Bower packages
 */

gulp.task('bower', function(){
    return bower('./bower_components')
            .pipe(gulp.dest('lib/'));
}) 

/*
*  Task - Styles 
*/
gulp.task('styles',function(){
    return sass(paths.styles.src, {
        style: 'compressed'
    })    
    .pipe(gulp.dest(paths.styles.dest))    
})

/*
*  Task - Watch 
*/
gulp.task('watch',function(){    
    gulp.watch(paths.styles.watch, ['styles'] );
})

/*
*   Default Runner
*/
gulp.task('default',['watch']);
gulp.task('buildBower', ['bower']);
