function numberGame(nums: number[]): number[] {
    const initialNumsLength: number = nums.length;
    nums.sort(sortNums);
    let arr: number[] = [];
    const bobArr: number[] = [];
    const aliceArr: number[] = [];

    while (arr.length < initialNumsLength) {
        console.log('sortedNums:', nums);
        aliceArr.push(nums.shift());
        bobArr.push(nums.shift());
        arr.push(bobArr.shift());
        arr.push(aliceArr.shift());
    }

    return arr;
};

const sortNums = (a: number, b: number) => {
    if (a === b) {
        return 0;
    }
    return a < b ? -1 : 1;
}