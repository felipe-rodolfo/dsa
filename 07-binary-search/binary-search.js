function binarySearch(arr, target) {

    let start = 0;
    let end = arr.length - 1;
    
    while(start <= end) {
        let middle = Math.floor((start + end )/ 2);

        if(arr[middle] == target) {
            return middle;
        }

        if(target < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return -1
}

let nums = [0, 1, 2, 5, 7, 8, 15, 25, 30];
console.log(binarySearch(nums, 15));