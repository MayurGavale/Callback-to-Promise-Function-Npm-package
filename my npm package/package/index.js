const convertCallbackToAsync = (functionToCall) => {
    return () => {
        return new Promise((resolve, reject) => {
            try{
                functionToCall((result) => {
                    resolve(result);
                });
                
            } catch(error){
                reject(error);
            }
        })
    }
}
const convertCallbackToAsyncWithError = (functionToCall) => {
    return () => {
        return new Promise((resolve, reject) => {
            try{
                functionToCall((error,result) => {
                    if(error) reject(error);
                    resolve(result);
                });
                
            } catch(error){
                reject(error);
            }
        })
    }
}

module.exports = {
    convertCallbackToAsync,
    convertCallbackToAsyncWithError
}