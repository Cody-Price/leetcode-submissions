type Operator = 1 | -1

function isDigit (s: string): boolean {
    return s === '(' || s === ')' || s === '+' || s === '-'
}

function calculate(s: string): number {
    let num = 0
    let res = 0

    let oper:Operator = 1 
    const stack: Operator[] = [1]

    for (let i = 0; i < s.length; i++) {
        const c = s[i]

        if (c === ' ') continue

        if (isDigit(c)) {

            // "(1-(4+5+2)-3)+(6+8)"
            // "(1-4-5-2-3)+(6+8)"
            if (c === '+' || c === '-') {
                res += num * oper
                oper = stack[stack.length - 1]
                num = 0
                oper = c === '-' ? (-1 * oper) as Operator : oper
            } else if (c === '(') {
                stack.push(oper)
            } else {
                stack.pop()
            }
            
        } else {
            const numberC = parseInt(c)
            num = num * 10 + numberC
        }
    }

    res += num * oper
    return res
};