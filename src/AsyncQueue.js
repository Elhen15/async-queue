const EventEmitter = require('events');

class AsyncQueue extends EventEmitter {
	constructor(asyncFunc) {
		super();
		this.asyncFunc = asyncFunc;
		this._items = [];
		this._isRunning = false;
		this._listenToEvents();
	}

	_listenToEvents() {
		this.on('run', async () => {
			if (this._isRunning) return;

			this._isRunning = true;

			try {
				const response = await this.asyncFunc(...this._items.shift());
				this._isRunning = false;
				this.emit('success', response);
			} catch (error) {
				this.emit('error', error);
			} finally {
				if (this._items.length) { this.emit('run'); }
			}
		});
	}

	add(...args) {
		this._items.push(args);
		this.emit('run');
	}
}

module.exports = AsyncQueue;
