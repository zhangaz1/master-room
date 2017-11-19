'use strict';


const {
	EventEmitter
} = require('./utils.js');

const Events = {
	Close: 'close'
};

class Room extends EventEmitter {

	constructor(name, master) {
		super();

		this.name = name;
		this.master = master;
		this.members = [];
	}

	join(member) {
		if(member.onClose){
			this.on(Events.Close, member.onClose);
		}
		this.members.push(member);
	}

	callMaster(request) {
		const action = request.action;
		const accept = this.master[action];
		return accept ?
			accept(request.data) :
			Promise.reject(`master can\'t process request of ${action}`);
	}

	close() {
		this.emit(Events.Close, this);
	}
}

Room.Events = Events;
module.exports = Room;