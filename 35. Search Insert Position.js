const searchInsert = (nums, target) => {
    if (nums.include(target)){
        return nums.findIndex((num) => num === target)
    } else {
        const sortedNums = [...nums, target].sort((a,b) => a - b)
        return sortedNums.findIndex((num) => num === target)
    }
}
