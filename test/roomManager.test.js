'use strict';


const roomManager = require('./../src/roomManager.js');

describe('test Room Manager', function () {

	const roomName1 = 'test room-1';
	const master1 = {};

	it('should can create a room', function () {
		const room1 = roomManager.createRoom(roomName1, master1);

		room1.should.be.an.Object()
			.which.has.properties({
				name: roomName1,
				master: master1
			});
	})

});