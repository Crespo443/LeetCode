var expect = function(val) {
    return {
        toBe : (expected) =>  {
            if (val !== expected) throw new Error('Not Equal')
            return true
        },
        notToBe : (expected) => {
            if (val === expected)  throw new Error('Equal')
            return true 
        } 
    }
};