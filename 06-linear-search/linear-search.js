
function linearSearch(arr, target) {
    if(arr[0] === target) return `the first ${0}`
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
}

let nums = [5, 7, 8, 9, 8, 5, 4];
console.log(linearSearch(nums, 7));