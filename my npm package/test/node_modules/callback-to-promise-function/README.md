callback-to-async-await
A utility library for converting callback-based functions to async/await syntax in JavaScript.

Installation
npm install callback-to-async-await
Usage
convertCallbackToAsync
Converts a callback-based function to an async function that returns a Promise.

const { convertCallbackToAsync } = require("callback-to-async-await");

const callbackFunction = (callback) => {
  setTimeout(() => {
    callback({ data: [1, 2, 3] });
  }, 1000);
};

const promiseFunction = convertCallbackToAsync(callbackFunction);

(async () => {
  const data = await promiseFunction();
  console.log(data);
})();
convertCallbackToAsyncWithError
Converts a callback-based function that follows the (error, result) convention to an async function that returns a Promise.

const { convertCallbackToAsyncWithError } = require("callback-to-async-await");

const callbackFunction = (callback) => {
  setTimeout(() => {
    callback(null, { data: [1, 2, 3] });
  }, 1000);
};

const promiseFunction = convertCallbackToAsyncWithError(callbackFunction);

(async () => {
  try {
    const data = await promiseFunction();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
})();
API
convertCallbackToAsync(functionToCall)
functionToCall: The callback-based function to be converted.
Returns an async function that returns a Promise.
convertCallbackToAsyncWithError(functionToCall)
functionToCall: The callback-based function to be converted.
Returns an async function that returns a Promise.
If the original callback function returns an error as the first argument, the Promise will be rejected with that error. Otherwise, the Promise resolves with the result.