'use strict';


var path = {
	src: 'src',
	dest: 'dest',
	test: 'test',
};

global.config = {
	src: path.src,
	dest: path.dest,
	test: {
        src: path.test + '/**/*.test.js',
        srcTs: path.test + '/**/*.test.ts',
		dest: path.dest + '/**/*.test.js',
	},
	js: {
		src: path.src + '/**/*.js',
        srcTs: path.src + '/**/*.ts',
        dest: path.dest + '/**/*.js',
    },
};
