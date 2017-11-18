'use strict';


const {
	EventEmitter
} = require('./../src/utils.js');

let Room = require('./../src/room.js');

describe('test Room', function () {

	let roomName = null;
	let master = null;
	let room = null;
	let member = null;

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

		room.should.has.property('members')
			.be.eql([]);
	});

	it('should join member', function () {
		room.join(member);

		room.should.has.property('members')
			.be.eql([member]);
	});

});