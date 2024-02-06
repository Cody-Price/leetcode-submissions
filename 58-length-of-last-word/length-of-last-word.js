/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const wArr = s.trim().split(' ');
    return wArr[wArr.length - 1].length;
};