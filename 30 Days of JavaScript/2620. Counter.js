var createCounter = function(n) {
    
    return function() {
        return n++
    };
};


var createCounter2 = (n) => {
    --n
    return () => ++n
}