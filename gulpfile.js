var gulp = require('gulp');
var ts = require('gulp-typescript');
var sass = require('gulp-sass');
var merge = require('merge2');

gulp.task('compile_ts', function() {
	var tsProject = ts.createProject('tsconfig.json');
	var tsResult = tsProject.src()
		.pipe(ts(tsProject));
 
	return merge([
		tsResult.dts.pipe(gulp.dest('static/release')),
		tsResult.js.pipe(gulp.dest('static/release'))
	]);
});

gulp.task('compile_sass', function() {
	return gulp.src('./static/css/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('static/release'))
});

gulp.task('watch_ts', function () {
  	gulp.watch(['./static/**/*.ts'], ['default']);
});

gulp.task('watch_sass', function() {
	gulp.watch(['./static/**/*.scss'], ['default']);
});

gulp.task('default', ['compile_ts', 'compile_sass']);