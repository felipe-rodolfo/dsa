

function bubbleSort(arr) {
    const n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
        let changed = false;

        for (let j = 0; j < n - 1; j++) {
            console.log(j)
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                changed = true
            }
        }
        if (!changed) break;
    }
    return arr;
}

let arr = [5, 4, 3, 9, 8, 7, 10, 11, 15, 14];
let arrOrderd = [1, 2, 3, 4, 5];
bubbleSort(arr)
console.log(bubbleSort(arrOrderd))