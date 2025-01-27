const lengtgOfLastWord = (str) => {
    let result = 0
    for (let i = str.length - 1; i >= 0; i--){
        if (str[i] !== ' ') {
            result++
        }
        if (str[i] === ' ' && result !== 0) {
            break
        }
    }
    return result
}