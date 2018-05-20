What's the difference between asynchronous and synchronous operations?

When you execute something synchronously, you wait for it to finish before moving on to another task.
When you execute something asynchronously, you move on to another task before it finishes.

Is javascript async or sync and why?
javascript is async, but is using a single thread.
For example the function setTimeout - this function gets a callback and a milliseconds value for timeout.
The callback will not be executed until the time defined is over.
The same with promises and async/await - The code execution will continue to the next line of code, but once the promise is resolved, the callback function of the promise will be executed, regardless of the current execution line.