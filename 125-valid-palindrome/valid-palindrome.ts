function isPalindrome(s: string): boolean {
    const charArr = s.split('').map((c: string) => c.toLowerCase()).filter((c: string) => {
        return c.match(/^[a-zA-Z0-9]*$/);
    });

    while (charArr.length) {
        if (charArr[0] === charArr[charArr.length - 1]) {
            charArr.shift();
            charArr.pop();
        } else {
            return false;
        }
    }

    return !charArr.length;
};