'use strict';


const should = require('should');

const roomManager = require('./../src/roomManager.js');

describe('test Room Manager', function () {

	const roomName1 = 'test room-1';
	const master1 = {};

	const roomName2 = 'test room-2';
	const master2 = {};

	beforeEach(function () {
		roomManager.clearRooms();
	})

	it('should can create a room', function () {
		const spy = sinon.spy(roomManager, 'createRoom');

		const room1 = roomManager.createRoom(roomName1, master1);

		room1.should.be.an.Object()
			.which.has.properties({
				name: roomName1,
				master: master1
			});

		spy.should.have.properties({
			called: true,
			calledOnce: true,
		});

		spy.calledWith(roomName1, master1).should.be.True();
		spy.returned(room1).should.be.True();
		spy.alwaysCalledOn(roomManager).should.be.True();

		spy.restore();
	});

	it('should can throw error when room existed', function () {
		const spy = sinon.spy(roomManager, 'createRoom');

		let room1 = null;
		let room2 = null;
		try {
			room1 = roomManager.createRoom(roomName1, master1);
			room2 = roomManager.createRoom(roomName1, master1);
		} catch (error) {

		} finally {
			room1.should.be.an.Object()
				.which.has.properties({
					name: roomName1,
					master: master1,
				});

			should(room2).be.Null();

			spy.threw('Error').should.be.True();
		}
	});

	it('should can get room by name', function () {
		roomManager.createRoom(roomName1, master1);
		const room = roomManager.getRoom(roomName1);

		room.should.be.an.Object()
			.which.has.properties({
				name: roomName1,
				master: master1,
			});
	});

	it('should close each room when call clear rooms', function () {
		const room1 = roomManager.createRoom(roomName1, master1);
		const room2 = roomManager.createRoom(roomName2, master2);

		let room = null;

		room = roomManager.getRoom(room1.name);
		room.should.have.properties({
			name: roomName1,
			master: master1,
		});

		room = roomManager.getRoom(room2.name);
		room.should.have.properties({
			name: roomName2,
			master: master2,
		});

		const spyRoom1Close = sinon.spy(room1, 'close');
		const spyRoom2Close = sinon.spy(room2, 'close');

		roomManager.clearRooms();

		spyRoom1Close.should.have.properties({
			called: true,
			calledOnce: true,
		});
		spyRoom2Close.should.have.properties({
			called: true,
			calledOnce: true,
		});

		room = roomManager.getRoom(room1.name);
		should(room).be.Undefined();

		room = roomManager.getRoom(room2.name);
		should(room).be.Undefined();
	});


});