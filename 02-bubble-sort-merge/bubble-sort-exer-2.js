function bubbleSortCountChange(arr) {
    const n = arr.length;
    let count = 0;
    for (let i = 0; i < (n - 1); i++) {

        for (let j = 0; j < (n - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                count++;
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp; 
            }
        }
    }

    return [arr, count];
}

let arr = [3, 1, 4, 1, 5, 9, 2, 6];
console.log(bubbleSortCountChange(arr));
