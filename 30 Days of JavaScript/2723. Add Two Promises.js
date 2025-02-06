var addTwoPromises = async function(promise1, promise2) {
     return await promise1 + await promise2 
};

var addTwoPromises1 = async (promise1, promise2) => {
    [val1, val2] = await Promise.all([promise1, promise2])
    return val1 + val2
} 

var addTwoPromises2 = async (promise1, promise2) => {
    return await Promise.all([promise1, promise2])
    .then(([val1, val2]) => val1 + val2)
}