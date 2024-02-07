/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => !!matrix.filter(mtx => !!mtx.filter(n => n === target).length).length > 0;