const FizzBuzz = (n) => {
    return Array.from( {length : n}, (_, i) => {
        let currentStr = ''
        const num = i + 1
        const divisibelBy3 = num % 3 === 0
        const divisibelBy5 = num % 5 === 0

        if (divisibelBy3) {
            currentStr += "Fizz"
        }

        if (divisibelBy5) {
            currentStr += "Buzz"
        }

        if (!currentStr){
            currentStr = String(num)
        }

        return currentStr
    })
} 
console.log(FizzBuzz(15))