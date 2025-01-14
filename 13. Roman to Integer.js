const romanToInteger = (roman) => {
    const romanNumericValues = new Map([
      ['I', 1],
      ['V', 5],
      ['X', 10],
      ['L', 50],
      ['C', 100],
      ['D', 500],
      ['M', 1000]
    ])
  
    let result = 0
    for (let i = roman.length - 1; i >= 0; i--){
      const currValue = romanNumericValues.get(roman[i])
      const leftValue = romanNumericValues.get(roman[i+1])
      if (currValue < leftValue){
        result -= currValue
      }else {
        result += currValue
      }
    }
    return result
}

console.log(romanToInteger("IV"))