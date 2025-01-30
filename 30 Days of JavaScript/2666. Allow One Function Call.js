var once = function(fn) {
    let call = 0
    return function(...args){
        if (!call++) return fn(...args)
    }
};

var once1 = (fn) => {
    let call = 0
    return (...args) => {
        if (!call++) return fn(...args)
    }
}