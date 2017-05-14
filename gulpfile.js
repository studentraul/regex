const gulp = require('gulp');
const ghPages = require('gulp-gh-pages');

gulp.task('ghpages', () => {
		return gulp
				.src('./src/**/*.*')
				.pipe(ghPages())
})