'use strict';


let should = require('should');

let add = require('./../src/add.js');

describe('test add', function() {

	it('should can add to number', function() {
		let a = 2;
		let b = 3;

		let result = add(a, b);

		result.should.be.equal(5);
	});

});
