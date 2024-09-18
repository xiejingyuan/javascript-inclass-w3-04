// 1
const arr = [1, 2, 3, 4, 5];
let first = arr[0] - 1
let last = arr[arr.length-1] + 1
arr.unshift(first)
arr.push(last)
console.log(arr.reverse()) 

// 2
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];
arr2.splice(0,1)
const arr3 = [...arr1, ...arr2];
console.log(arr3)

