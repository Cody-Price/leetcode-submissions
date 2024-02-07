/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    return !!matrix.filter(mtx => !!mtx.filter(n => n === target).length)[0];
};