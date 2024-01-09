/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if (word.length  < 2) {
        return true;
    }

    const splitWord = word.split('');

    if (splitWord[0] === splitWord[0].toUpperCase()) {
        // continue with pascal or all caps check
        if (splitWord[1] === splitWord[1].toUpperCase()) {
            console.log('a')
            // all caps check
            return splitWord.every(c => c === c.toUpperCase())
        } else {
            console.log('b')
            // pascal check
            splitWord.shift();
            return splitWord.every(c => {
                console.log('determine in b:', c, c.toLowerCase(), c === c.toLowerCase())
                return c === c.toLowerCase()
            });
        }
    } else {
        console.log('c')
        return splitWord.every(c => c === c.toLowerCase());
    }
};