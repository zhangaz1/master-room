'use strict';


let should = require('should');

let Room = require('./../src/room.js');

describe('test Room', function () {
	const roomName = 'test room';

	it('should can new a Room', function () {
		const room = new Room(roomName);

		room.should.be.an.Object()
			.which.has.property('name')
			.be.exactly(roomName);
	});

});