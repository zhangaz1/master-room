'use strict';


const roomManager = require('./../src/roomManager.js');

describe('test Room', function () {

	const roomName1 = 'test room-1';

	it('should can create a room', function () {
		const room1 = roomManager.createRoom(roomName1);

		room1.should.be.an.Object()
			.which.has.property('name')
			.be.exactly(roomName1);
	})

});