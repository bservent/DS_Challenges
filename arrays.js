/* Tuck in Array
Create a function that takes two arrays and insert the second array in the middle of the first array.

Examples
tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

tuckIn([15,150], [45, 75, 35]) ➞ [15, 45, 75, 35, 150]

tuckIn([[1, 2], [5, 6]], [[3, 4]]) ➞ [[1, 2], [3, 4], [5, 6]] */

/* function insertArr(arr1,arr2) {
  var a = arr1.shift();
  var b = arr1.pop();
  var c = arr2.splice(0,0,a);
  var d = arr2.push(b);
  console.log(arr2)
}

insertArr([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]); */

/* Number Split
Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.

Examples
numberSplit(4) ➞ [2, 2]

numberSplit(10) ➞ [5, 5]

numberSplit(11) ➞ [5, 6]

numberSplit(-9) ➞ [-5, -4] */

/* function splitNum(n) {
  if(n % 2 === 0) {
    return [n/2,n/2]
  }else{
    return [n/2-.5, n/2+.5]
  }
}

splitNum(4); */

/* Sum of Number Elements in an Array
Arrays can be mixed with various types. Your task for this challenge is to sum all the number elements in the given array. Create a function that takes an array and returns the sum of all numbers in the array.

Examples
numbersSum([1, 2, "13", "4", "645"]) ➞ 3

numbersSum([true, false, "123", "75"]) ➞ 0

numbersSum([1, 2, 3, 4, 5, true]) ➞ 15 */

/* function numbersSum(arr) {
  var result = 0
  for(let i=0; i<arr.length; i++){
    if(typeof(arr[i]) === "number") {
      result += arr[i]
    }
  }
    console.log(result)
  }

numbersSum([1, 2, 13, "12"]); */
