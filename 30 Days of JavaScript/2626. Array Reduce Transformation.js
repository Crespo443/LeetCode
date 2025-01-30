var reduce = function(nums, fn, init) {
    let result = init
    for (let i=0; i < nums.length; i++){
        result = fn(result,nums[i])
    }
    return result
};

var reduce2 = (nums, fn, init) => nums.reduce(fn, init)
