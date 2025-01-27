var plusOne = function(digits) {
    const sum =  BigInt(digits.reduce((acc, digit) => acc += String(digit))) + BigInt(1)
    return Array.from(String(sum)).map((digit) => Number(digit))
};