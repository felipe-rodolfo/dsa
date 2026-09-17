const cache = new Map();

function collatz(n) {

     if (!Number.isInteger(n) || n < 1) {
        throw new Error('n deve ser um inteiro positivo');
    }

    const sequence = [n];
    let steps = 0;

    while (n > 1) {
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n = (n * 3) + 1;
        }

        steps++;
        sequence.push(n);
    }

    return {
        sequence,
        steps
    };
}

console.log(collatz(9));