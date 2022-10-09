function kadaneAlgorithm(arr: number[]):number {
    let max, maxGlobal;
    max = maxGlobal = arr[0];
    for (let i = 1; i < arr.length; i++) {
        max = Math.max(max + arr[i], arr[i]); // what is bigger tha last sub array or the current index alone 
        if (max > maxGlobal)  maxGlobal = max
    }
    return maxGlobal;
}


//first sub array is the first index
// then we check the max of (the current sub array  or (the current subarray + the next index ) )
// if the new max is bigger than the real max(maxGlobal) then we make maxGlobal = max ;

let list = [-2, 44, -4, 7, -2]
console.log(kadaneAlgorithm(list))
