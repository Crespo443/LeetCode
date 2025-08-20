const containsDuplicate = (nums) => {
    return nums.length !== new Set(nums).size
}

const containsDuplicate1 = (nums) => {
    const obj = {}
    for (const num of nums) {
        if(num in obj){
            return true
        } else {
            obj[num] = 1  
        }
    }
    return false
}

const containsDuplicate2 = (nums) => {
    return nums.some((num, index) => nums.indexOf(num) !== index)
}