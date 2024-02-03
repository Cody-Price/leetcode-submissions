/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    if (nums.length <= 2) {
        return nums[0]
    }
    let checkArr = nums.slice();
    checkArr.sort((a, b) => {
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        }
        return 0;
    })

    for (i=0;i<checkArr.length;i++) {
        if (checkArr[i] === checkArr[i + 1]) {
            return checkArr[i];
        } 
    }
};