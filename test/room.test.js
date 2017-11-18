'use strict';


let Room = require('./../src/room.js');

describe('test Room', function () {
	const roomName = 'test room';
	const master = {};

	it('should can new a Room', function () {
		const room = new Room(roomName, master);

		room.should.be.an.Object();

		room.should.has.property('name')
			.be.exactly(roomName);

		room.should.has.property('master')
			.be.exactly(master);
	});

});