/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const mixedSortedArr = nums1.concat(nums2).sort(sortNeg);

    return mixedSortedArr.length % 2 !== 0 ? mixedSortedArr[Math.floor(mixedSortedArr.length / 2)] : (mixedSortedArr[(mixedSortedArr.length / 2) - 1] + mixedSortedArr[mixedSortedArr.length / 2]) / 2;
};

const sortNeg = (a, b) => {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    }
    return 0;
}