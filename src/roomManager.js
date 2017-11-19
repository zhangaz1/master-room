'use strict';


const Room = require('./room.js');

const rooms = new Map();

module.exports = {
	createRoom,
	getRoom: rooms.get.bind(rooms),
	clearRooms: clearRooms,
};

function createRoom(roomName, master) {
	if (rooms.has(roomName)) {
		throw new Error(`room is existed: ${roomName}`);
	}

	const room = new Room(roomName, master);
	rooms.set(roomName, room);

	room.on(Room.Events.Close, closeRoom);

	return room;
}

function closeRoom(room) {
	rooms.delete(room.name);
}

function clearRooms() {
	for (let room of rooms.values()) {
		room.close();
	}
}