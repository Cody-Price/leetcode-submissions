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
        if (splitWord[1] === splitWord[1].toUpperCase()) {
            return splitWord.every(c => c === c.toUpperCase())
        } else {
            splitWord.shift();
            return splitWord.every(c => c === c.toLowerCase());
        }
    } else {
        return splitWord.every(c => c === c.toLowerCase());
    }
};