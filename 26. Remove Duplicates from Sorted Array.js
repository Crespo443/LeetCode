var removeDuplicates = function(nums) {
    let index = 1
    for (let i = 1; i < nums.length; i++){
        if (nums[i] !== nums[i-1]){
            nums[index] = nums[i]
            index += 1
        }
    }
    return index
};

