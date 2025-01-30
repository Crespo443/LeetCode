var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World"
    }
};

var createHelloWorl2 = function() {
    return () => "Hello World"
};

var createHelloWorld3 = () => () => 'Hello World';