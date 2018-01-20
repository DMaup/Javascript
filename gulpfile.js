var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var path = "notes";

gulp.task('serv', function(){
    browserSync.init({
      server: "./" + path
    });

    gulp.watch('./' + path + "/**/**.**").on('change', browserSync.reload);
});