var gulp = require('gulp');
var requireDir = require('require-dir');

requireDir('./tasks', { recurse: true });

gulp.task('build', ['scripts', 'scss']);
gulp.task('default', ['build', 'watch']);