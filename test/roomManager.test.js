'use strict';


const should = require('should');

const roomManager = require('./../src/roomManager.js');

describe('test Room Manager', function () {

	const roomName1 = 'test room-1';
	const master1 = {};

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

		let room2 = null;
		try {
			room2 = roomManager.createRoom(roomName1, master1);
		} catch (error) {

		} finally {
			should(room2).be.Null();
			spy.threw('Error').should.be.True();
		}

	});

});