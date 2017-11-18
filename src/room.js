const EventEmitter = require('events').EventEmitter;

'use strict';


class Room extends EventEmitter {

	constructor(name, master) {
		super();

		this.name = name;
		this.master = master;
		this.members = [];
	}

	join(member) {

	}
}

module.exports = Room;