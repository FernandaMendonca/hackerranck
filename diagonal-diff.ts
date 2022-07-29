Given a square matrix, calculate the absolute difference between the sums of its diagonals.    

function diagonalDifference(arr: number[][]): number {
    const len = arr.length;
    const lenMinusOne = len - 1;
    let left = 0, right = 0;
    
    for (let i=0; i < len; i++) {
        left+=arr[i][i];
        right+=arr[lenMinusOne - i][i];
    }

    const result = Math.abs(left - right);
    return result
}
