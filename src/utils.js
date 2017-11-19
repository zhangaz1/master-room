'use strict';


extendPromise();

module.exports = {
	EventEmitter: require('events').EventEmitter,
};

function extendPromise() {
	Promise.prototype.done = function (onFulfilled, onRejected) {
		this.then(onFulfilled, onRejected)
			.catch(function (reason) {
				// 抛出一个全局错误
				setTimeout(() => {
					throw reason
				}, 0);
			});
	};

	Promise.prototype.finally = function (callback) {
		this.then(value => callback())
			.catch(reason => callback());
	};

}