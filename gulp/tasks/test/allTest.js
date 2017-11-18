'use strict';


global.should = require('should');

gulp.task('allTest', cb => {
	return plugins
		.sequence('nodeTest')
		(cb);
});
