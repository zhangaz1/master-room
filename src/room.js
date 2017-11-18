'use strict';


const {
	EventEmitter
} = require('./utils.js');

class Room extends EventEmitter {

	constructor(name, master) {
		super();

		this.name = name;
		this.master = master;
		this.members = [];
	}

	join(member) {
		this.members.push(member);
	}
}

module.exports = Room;