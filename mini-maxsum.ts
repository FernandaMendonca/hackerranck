// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
// Then print the respective minimum and maximum values as a single line of two space-separated long integers. 

function miniMaxSum(arr: number[]): void {
    // Write your code here
    let sum = arr.reduce((acc, cur) => acc + cur);
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    console.log(`${sum - max}, ${sum - min}`)
}
