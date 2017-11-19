'use strict';


const {
	EventEmitter
} = require('./../src/utils.js');

let Room = require('./../src/room.js');

describe('test Room', function () {

	let roomName = null;
	let master = null;
	let room = null;
	let member = null;

	beforeEach(function () {
		roomName = 'test room';
		master = {
			validate: function (data) {
				return new Promise(function (resolve, reject) {
					data.code ?
						resolve(data) :
						reject(data);
				});
			}
		};

		room = new Room(roomName, master);
	});

	it('should be a class(Function)', function () {
		Room.should.be.a.Function();
	});

	it('should can new a Room', function () {
		room.should.be.an.Object()
			.and.instanceof(EventEmitter)

		room.should.have.property('name')
			.which.be.exactly(roomName);

		room.should.have.property('master')
			.which.be.exactly(master);

		room.should.have.property('members')
			.which.be.eql([]);

		room.should.have.property('callMaster')
			.which.is.a.Function();
	});

	it('should join member', function () {
		member = {};
		room.join(member);

		room.should.have.property('members')
			.be.eql([member]);
	});

	it('should can call master(can process)', function (done) {
		const request = {
			action: 'validate',
			data: {
				code: 'xxx'
			}
		};

		const masterHandler = sinon.spy(master, request.action)
		const successful = sinon.stub();
		const failed = sinon.stub();

		room.callMaster(request)
			.then(successful)
			.catch(failed)
			.finally(function () {
				masterHandler.should.have.properties({
					called: true,
					calledOnce: true,
				});

				masterHandler.calledWith(request.data)
					.should.be.True();

				successful.should.have.properties({
					called: true,
					calledOnce: true,
				});

				successful.calledWith(request.data)
					.should.be.True();

				failed.should.have.properties({
					called: false
				});

				done();
			});
	});

	it('should can call master(can\'t process)', function (done) {
		const request = {
			action: 'xxx',
			data: {
				code: 'xxx'
			}
		};

		master.should.not.have.property(request.action);

		const successful = sinon.stub();
		const failed = sinon.stub();

		room.callMaster(request)
			.then(successful)
			.catch(failed)
			.finally(function () {
				successful.should.have.properties({
					called: false
				});

				failed.should.have.properties({
					called: true,
					calledOnce: true,
				});

				failed.calledWith(`master can\'t process request of ${request.action}`)
					.should.be.True();

				done();
			});
	});

	it('should can close room', function () {
		const close = sinon.spy(room, 'close');

		room.close();

		close.should.have.properties({
			called: true,
			calledOnce: true,
		});
	});

});