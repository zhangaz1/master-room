'use strict';


gulp.task('watch.src', cb => {

	gulp.watch(config.js.dest, function() {
		gulp.start('change');
	});

	cb();
});
