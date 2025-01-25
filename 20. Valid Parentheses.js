const validParentheses = (s) => {
    const stack = []
    const parentheses = {
        '{' : '}',
        '(' : ')',
        '[' : ']'
    }

    for (const char of s){
        if (Object.values(parentheses).includes(char)){
            stack.push(char)
        } else {
            if (char !== parentheses[stack[0]]){
                return false
            }
        }
    }
    return stack.length === 0
}