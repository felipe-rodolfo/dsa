function fatorial(n){
    if(n <= 1) {
        return 1n;
    }
    return BigInt(n) * fatorial(n - 1);
}

console.log(fatorial(18));

function fatorialLoop(n) {
    let result = 1n;

    for(let i = 2n; i <= BigInt(n); i++) {
        result *= i;
    }

    return result;
}

console.log(fatorialLoop(18)); 