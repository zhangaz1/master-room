'use strict';


const Room = require('./room.js');

const rooms = new Map();

module.exports = {
	createRoom,
	getRoom: rooms.get,
};

function createRoom(roomName, master) {
	if (rooms.has(roomName)) {
		throw new Error(`room is existed: ${roomName}`);
	}

	const room = new Room(roomName, master);
	rooms.set(roomName, room);

	return room;
}