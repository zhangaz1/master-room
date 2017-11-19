'use strict';


global.should = require('should');
global.sinon = require('sinon');

gulp.task('allTest', cb => {
	return plugins
		.sequence('nodeTest')
		(cb);
});
