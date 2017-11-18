'use strict';


const Room = require('./room.js');

module.exports = {
	createRoom,
};

function createRoom(roomName) {
	return new Room(roomName);
}