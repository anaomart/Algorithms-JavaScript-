export default function binarySearch(hayStack: number[], needle: number) {
    let lo = 0;
    let hi = hayStack.length;

    do {
        let m = Math.floor(lo + (hi - lo) / 2);
        m
        let v = hayStack[m];
        v;
        if (v === needle) {
            return v;
        } else if (v > needle) {
            hi = m;
        } else {
            lo = m + 1;
        }
    } while (lo < hi);
    return -1;
}
function BigO_OfN(hayStack: number[], needle: number) {
    console.log(hayStack.length)
    for (let i = 0; i < hayStack.length -1  ; i++) {
        if (hayStack[i] == needle) {
            return hayStack[i];
        }
        
    }
    return -1;

}

let list: number[] = []
for (let j = 0; j < 10000000; j++) {
    list.push(j)
}
let needle = 10000000;
let t0 = performance.now();
console.log(BigO_OfN(list, needle))
let t1 = performance.now();
console.log(`${t1 - t0} `); // 200 milliseconds

t0 = performance.now();
console.log(binarySearch(list, needle));
t1 = performance.now();
console.log(`${t1 - t0} `); //2 milliseconds



