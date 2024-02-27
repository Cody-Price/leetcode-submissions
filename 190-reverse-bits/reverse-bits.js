var reverseBits = function(n) {
    const string = n.toString(2);
    const arrayString = string.split('');
    const length = arrayString.length;
    for (let i = 0; i < (32 - length); i++) {
        arrayString.unshift('0');
    }
    return parseInt(arrayString.reverse().join('').toString(2), 2);
};