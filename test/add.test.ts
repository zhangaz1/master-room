let should = require('should');
// should(5).is.a.Number();

// import { should } from 'should';

import { add } from '../src/add';

describe('test add', function() {

	it('should can add to number', function() {
		let a = 2;
		let b = 3;

		let result = add(a, b);

		result.should.be.equal(5);
	});

});