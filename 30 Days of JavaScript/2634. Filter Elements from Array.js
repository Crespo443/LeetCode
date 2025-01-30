const filter = (arr, fn) => {
    const result = []
    for (let i = 0; i < arr.length; i++){
        if (fn(arr[i], i)){
            result.push(arr[i])
        }
    }
    return result
}

const filter2 = (arr, fn) => {
    return arr.filter(fn)
}