// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
// Print the decimal value of each fraction on a new line with places after the decimal.

function plusMinus(arr: number[]): void {
    const size = arr.length;
    const { pos, neg, zero } = 
    arr.reduce((acc, cur) => {
        if (cur < 0) acc.neg += 1;
        if (cur > 0) acc.pos +=1;
        if (cur === 0 ) acc.zero += 1;
        return acc;
    }, {
     pos: 0,   
     neg: 0,   
     zero: 0,   
    })
    
    console.log((pos/size).toFixed(6));
    console.log((neg/size).toFixed(6));
    console.log((zero/size).toFixed(6));
}
