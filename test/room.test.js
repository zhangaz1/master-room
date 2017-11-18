const EventEmitter = require('events').EventEmitter;

'use strict';


let Room = require('./../src/room.js');

describe('test Room', function () {

	let roomName = null;
	let master = null;
	let room = null;

	beforeEach(function () {
		roomName = 'test room';
		master = {};

		room = new Room(roomName, master);
	});

	it('should be a class(Function)', function () {
		Room.should.be.a.Function();
	});

	it('should can new a Room', function () {
		room.should.be.an.Object()
			.which.be.instanceof(EventEmitter)

		room.should.has.property('name')
			.be.exactly(roomName);

		room.should.has.property('master')
			.be.exactly(master);
	});

});