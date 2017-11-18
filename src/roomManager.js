'use strict';


const Room = require('./room.js');

module.exports = {
	createRoom,
};

function createRoom(roomName, master) {
	return new Room(roomName, master);
}