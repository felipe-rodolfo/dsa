function gcd(a, b) {
    while (b !== 0) {
        let remainder = a % b;
        a = b;
        b = remainder;
    }
    return a;
}
console.log(gcd(48, 18))

function recursiveGcd(a, b) {
    if (b === 0) {
        return a;
    }

    return recursiveGcd(b, a % b);
}
console.log(recursiveGcd(48, 18))

function lcm(a, b) {
    const divisor = gcd(a, b);

    return Math.abs(a * b) / divisor;
}
console.log(lcm(12, 8))
console.log(lcm(48, 18))
console.log(lcm(100, 75))
console.log(lcm(0, 5))