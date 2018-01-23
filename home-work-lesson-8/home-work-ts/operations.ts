
 export function exeOperation(func = Math.floor, ...n: number[]): number {
    let sum: number = 0;
    for (let i = 0; i < n.length; i++) {
        sum += func(n[i]);
    }
    return sum;
}
