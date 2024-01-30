/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    nums.sort((a, b) => {
        if (a === b) {
            return true;
        }
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
    });

    for (i=0;i<nums.length;i++) {
        if (nums[i] === nums[i + 1]) {
            return true;
        };
    }
    
    return false;
};