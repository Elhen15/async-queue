const AsyncQueue = require('../src/AsyncQueue');

const asyncFunc = (number) => new Promise((resolve, reject) => {
    resolve(number)
});

const asyncFuncError = (number) => new Promise((resolve, reject) => {
    reject('Error')
});

describe("Testing AsyncQueue funcs", () => {
	it("should create new queue with asyncFunc and emit success event", () => {
        expect.assertions(1)
        const queue = new AsyncQueue(asyncFunc);
        queue.add(1);
        queue.on('success', (response) => expect(response).toEqual(1));
    });
    it("should create new queue, adding 3 items and emit success events by order", () => {
        expect.assertions(3)
        const queue = new AsyncQueue(asyncFunc);
        let items = [1,2,3];
        queue.add(1);
        queue.add(2);
        queue.add(3);
        queue.on('success', (response) => expect(response).toEqual(items.shift()));
    });
    it("should create new queue and emit error event", () => {
        expect.assertions(1)
        const queue = new AsyncQueue(asyncFuncError);
        queue.add(1);
        queue.on('error', (response) => expect(response).toEqual('Error'));
	});
});