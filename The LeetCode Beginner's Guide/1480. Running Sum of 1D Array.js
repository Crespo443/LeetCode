const runningSum = (arr) => {
    let sum = 0
    return arr.map( num => sum += num)
} 

const arr = [3,1,2,10,1]
const result = runningSum(arr)