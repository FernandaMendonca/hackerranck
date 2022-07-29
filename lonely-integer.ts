// Given an array of integers, where all elements but one occur twice, find the unique element.

function lonelyinteger(a: number[]): number { 
    let result = a.reduce((a,b) => a ^ b, 0)
    return result
}
