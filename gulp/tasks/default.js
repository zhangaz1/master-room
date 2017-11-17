'use strict';


gulp.task('default', cb => {
	return plugins
		.sequence('allTest', 'watch.src', 'watch.test', 'watch.srcTs', 'watch.testTs')
		(cb);
});
