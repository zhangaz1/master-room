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

	callMaster(request) {
		const action = request.action;
		const accept = this.master[action];
		return accept ?
			accept(request.data) :
			Promise.reject(`master can\'t process request of ${action}`);
	}

	close(){

	}
}

module.exports = Room;