function divide(dividend: number, divisor: number): number {
    if (dividend === -2147483648 && divisor === -1) {
        return 2147483647
    } else if (dividend === -2147483648 && divisor === 1) {
        return -2147483648
    }
    return Math.trunc(dividend/divisor);
};