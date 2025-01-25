const validParentheses = (s) => {
    const stack = []
    const parentheses = {
        '{' : '}',
        '(' : ')',
        '[' : ']'
    }

    for (const char of s){
        if (char in parentheses){
            stack.push(char)
        } else {
            if (char !== parentheses[stack[0]]){
                return false
            }
        }
    }
    return stack.length === 0
}