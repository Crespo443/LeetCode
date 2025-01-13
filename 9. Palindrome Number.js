const isPalindrome = (num) => {
    const arrayNum = Array.from(String(num))
    const reversedArraNum = [...arrayNum].reverse()
    return arrayNum.join() === reversedArraNum.join()   
}

console.log(isPalindrome(121))