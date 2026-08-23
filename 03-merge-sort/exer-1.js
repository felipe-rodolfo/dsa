
function mergeSort(arr) {

    if (arr.length <= 1) {
        return arr;
    }

    let middle = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, middle));
    let right = mergeSort(arr.slice(middle));

    return merge(left, right);
}

function merge(left, right) {
    let result = [];

    while(left.length && right.length) {
        if(left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    return [...result, ...left, ...right];
}

let arr = [5, 7, 9, -2, 3, 5, 4];
console.log(mergeSort(arr))