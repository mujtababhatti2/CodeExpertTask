// Question 1 
//Orginal array [3,2,7,4,6,9]
function convertDescendingArray (arr) {
    return arr.sort((a, b) => b - a);
}

const arr = [3, 2, 7, 4, 6, 9];
const sortedArray = convertDescendingArray(arr);
console.log(sortedArray); //[9,7,6,4,3,2]


// Question 2
function flagPalindrome(str) {
    const strarr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedStr = strarr.split('').reverse().join('');
    return strarr === reversedStr;
}

console.log(flagPalindrome("madam")); // Output: true
console.log(flagPalindrome("doctor")); // Output: false

// Question 3
// orginal array = [3, 7, 1, 5, 11, 19]
function largerNumberSum(arr) {
    if (arr.length < 2) {
        throw new Error("Array must contain at least two numbers");
    }
    arr.sort((a, b) => b - a);
    return arr[0] + arr[1];
}

const array = [3, 7, 1, 5, 11, 19];
const sum = largerNumberSum(array);
console.log(sum); // Output: 30

// Question 4
// orginal array = [3, 4, 9, 1, 7, 3, 2, 6]
function findMissingNumbers(arr) {
    const max = Math.max(...arr);
    const numSet = new Set(arr);
    const missingNumbers = [];
    for (let i = 0; i <= max; i++) {
        if (!numSet.has(i)) {
            missingNumbers.push(i);
        }
    }
    
    return missingNumbers;
}

const orgArr = [3, 4, 9, 1, 7, 3, 2, 6];
const missing = findMissingNumbers(orgArr);
console.log(missing); // Output: [0, 5, 8]

//Question 5
//repeated arr =[4, 3, 5, 6, 4, 7, 9, 2, 4, 6, 3, 4, 6, 3, 4, 8, 5, 1, 5]
function RepeatedNumber(arr) {
    const countMap = {};
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (countMap[num]) {
            countMap[num]++;
        } else {
            countMap[num] = 1;
        }
    }
    let mostRepeated = null;
    let maxCount = 0;

    for (const num in countMap) {
        if (countMap[num] > maxCount) {
            mostRepeated = num;
            maxCount = countMap[num];
        }
    }
    return `${mostRepeated} is repeated ${maxCount} times`;
}
const repeatedarr= [4, 3, 5, 6, 4, 7, 9, 2, 4, 6, 3, 4, 6, 3, 4, 8, 5, 1, 5];
console.log(RepeatedNumber(repeatedarr));


// Question 6
//Array =[3, 8, 9, 7, 6]
function rotateArray(arr) {
    if (!arr || arr.length === 0) {
        return arr;
    }
    const lastElement = arr[arr.length - 1];

    for (let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = lastElement;

    return arr;
}

let A = [3, 8, 9, 7, 6];
let rotatedA = rotateArray(A);
console.log(rotatedA); // Output: [6, 3, 8, 9, 7]
