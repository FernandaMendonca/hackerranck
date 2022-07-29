function countingSort(arr: number[]): number[] {
    let len = arr.length, 
    count = [];
    
    for (let i = 0; i < 100; i++) {
        count[i] = 0;
    }
    for (let i = 0; i < len; i++) {
        count[arr[i]]++;
    }
    
    return count;
}
