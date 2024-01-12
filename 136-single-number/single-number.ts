function singleNumber(nums: number[]): number {
    let uniqueNums: number[] = [];
    let duplicateNums: number[] = [];

    nums.forEach((num: number) => {
        if (!uniqueNums.includes(num) && !duplicateNums.includes(num)) {
            uniqueNums = [...uniqueNums, num];
        } else {
            duplicateNums = [...duplicateNums, num];
            uniqueNums.splice(uniqueNums.indexOf(num), 1);
        }
    })

    return uniqueNums[0];
};