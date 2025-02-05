var generate = function(numRows) {
    const result = []
    for (let i = 0; i < numRows; i++){
        let currRow = []
        let prevRow = result[i-1]

        for (let j = 0; j <= i; j++){
            if(j === 0 || j === i){
                currRow.push(1)
            } else {
                currRow.push(prevRow[j-1] + prevRow[j])
            }
        }
        result.push(currRow) 
    }    
    return result
};

var generate1 = (numRows) => {
    const result = [[1]]
    for (let i = 1; i < numRows; i++){
        let currRow = [1]
        let prevRow = result[i-1]

        for (let j = 1; j < i; j++){
            currRow.push(prevRow[j-1] + prevRow[j])
        }
        currRow.push(1)
        result.push(currRow)
    }
    return result
}