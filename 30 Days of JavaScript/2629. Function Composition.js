var compose = function(functions) {
    return function(x) {
        let result = x
        for (let i = functions.length - 1; i >= 0; i--){
            result = functions[i](result)
        }
        return result
    }
};

var compose2 = (functions) => {
    return (x) => {
        return functions.reduceRight((acc,fn) => acc = fn(acc),x)
    }
}