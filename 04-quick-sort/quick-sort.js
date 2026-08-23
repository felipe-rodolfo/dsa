function quickSort(arr) {

    if(arr.length <= 1) return arr;
    let pivot = arr[Math.floor(arr.length / 2)];
    let [left, middle, right] = partition(arr, pivot);
    return [...quickSort(left), ...middle, ...quickSort(right)];
}

function partition(arr, pivot) {
    let left = [];
    let middle = [];
    let right = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else if(arr[i] === pivot) {
            middle.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [left, middle, right];
}

let arr = [5,6,9,8,5,2,3,6,4,1];
console.log(quickSort(arr));