'use strict';


gulp.task('watch.test', cb => {

	gulp.watch(config.test.dest, function() {
		gulp.start('change');
	});

	cb();
});
