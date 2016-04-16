var gulp = require('gulp');
var ts = require('gulp-typescript');
var merge = require('merge2');

var tsProject = ts.createProject('tsconfig.json', {
    declaration: true,
    noExternalResolve: true
});

gulp.task('compile_ts', function() {
//   var tsProject = ts.createProject('tsconfig.json');
	var tsResult = tsProject.src()
		.pipe(ts(tsProject));
 
	return merge([
		tsResult.dts.pipe(gulp.dest('release')),
		tsResult.js.pipe(gulp.dest('release'))
	]);
});

gulp.task('watch_ts', function () {
  gulp.watch(['./server/static/**/*.ts'], ['default']);
});

gulp.task('default', ['compile_ts']);