const addBinary = (a,b) => {
    let result = ''
    let i = a.length - 1
    let j = b.length - 1
    let carry = 0

    while (i >= 0 || j >= 0 || carry){
        const digitA = (i >= 0) ? Number(a[i]) : 0
        const digitB = (j >= 0) ? Number(b[j]) : 0

        const sum = digitA + digitB + carry
        carry = (sum >= 2) ? 1 : 0
        result = (sum % 2) + result
        i--
        j--
    }
    return result
}