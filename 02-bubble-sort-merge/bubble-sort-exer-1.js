function bubbleSortDesc(arr) {
    const n = arr.length;

    for (let i = 0; i < (n - 1); i++) {

        for (let j = (n - 1); j > 0; j--) {
            if (arr[j] > arr[j - 1]) {
                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp; 
            }
        }
    }

    return arr;
}

let arr = [3, 1, 4, 1, 5, 9, 2, 6];
console.log(bubbleSortDesc(arr));
