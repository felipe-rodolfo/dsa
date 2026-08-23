function mergeSort(arr) {

    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle); 
    const right = arr.slice(middle);
    
    const leftOdered = mergeSort(left);
    const rightOdered = mergeSort(right);

    return merge(leftOdered, rightOdered);
}

function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++
        } else {
            result.push(right[j]);
            j++;
        }
    }

    while(i < left.length) {
        result.push(left[i]);
        i++;
    }

    while(j < right.length) {
        result.push(right[j])
        j++;
    }

    return result;
}

let arr = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(arr)); 