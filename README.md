AsyncQueue
===========

<blockquote>
This module provides you the opportunity to run asynchronous tasks in series.
</blockquote>

### Requirements
There are dev dependencies only:
- jest
- eslint

### Getting Started
```javascript
const { AsyncQueue } = require("./AsyncQueue");
// create new queue with async function
const queue = AsyncQueue(asyncFunc);
```

### Methods
`queue.add(args...)` </br>
Adds args to the queue, the args will be pass to the asyncFunc.

`queue.on('error', (error) => dosomething... )` </br>
Listener for error events from asyncFunc.

`queue.on('success', (response) => console.log(:)) )` </br>
Listener for success events from asyncFunc.


### Example
```javascript
// A dummy async function
const uploadFile = (fileName, file) => new Promise((resolve) => {
	console.log(`Started uploading: ${fileName}`);
	setTimeout(() => {
		console.log(`Done uploading: ${fileName}`);
		resolve(fileName);
	}, 1000);
});

// creating new queue with that asyncFunc
const queue = new AsyncQueue(uploadFile);

queue.add('1', '1');
queue.add('2', '2');
queue.add('3', '3');

### Expected output
Started uploading: 1
Done uploading: 1
Started uploading: 2
Done uploading: 2
Started uploading: 3
Done uploading: 3
```
