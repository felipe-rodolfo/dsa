
function palindrome(str) {

    const formattedStr = str.toLowerCase()
                        .replace(/[^a-z0-9]/g, "");

    let left = 0;
    let right = formattedStr.length - 1;

    while(left < right) {
        if (formattedStr[left] !== formattedStr[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;

}

console.log(palindrome("arara"));
console.log(palindrome("banana"));
console.log(palindrome("A Santa No Natal"));
console.log(palindrome("Was it a car or a cat I saw"));
console.log(palindrome("A man, a plan, a canal: Panama"));