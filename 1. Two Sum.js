//solution 1
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++){
            if (nums[i] + nums[j] === target){
                return [i,j]
            }
        }
    }
};

//solution 2
const twoSum2 = (nums, target) => {
    let numsMap = new Map()
    for (let i = 0; i < nums.length; i++){
        const complement = target - nums[i]
        if (numsMap.has(complement)){
            return [numsMap.get(complement),i]
        }
        numsMap.set(nums[i], i)
    }
}