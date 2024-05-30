const { convertCallbackToAsyncWithError} = require("callback-to-promise-function")

const callbackFunction = (callback) => {
    setTimeout(() => {
        callback(null, {data: [1,22,44,3]})
    },1000)
}

const promiseFunction = convertCallbackToAsyncWithError(callbackFunction);

(async () => {
    const data = await promiseFunction();
    console.log(data);
})();