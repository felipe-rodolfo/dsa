const cache = new Map();
function fibonacciRecursive(n){
    if(n === 0 || n === 1) return n;
    
    if(cache.has(n)) return cache.get(n);
    const result = fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
    cache.set(n, result);
    
    return result;
}
console.time("fibonacciRecursive");
console.log(fibonacciRecursive(40));
console.timeEnd("fibonacciRecursive");

function fibonacciIterative(n) {
    
    if(n === 0) return [0];
    if(n === 1) return [0, 1];

    let previous = 0;
    let current = 1;
    let sequence = [previous, current];
    for (let i = 2; i <= n; i++) {
        
        const next = previous + current; 
        sequence.push(next);
        previous = current;
        current = next;
    }

    return sequence;

}

console.time("fibonacciIterative");
console.log(fibonacciIterative(40));
console.timeEnd("fibonacciIterative");