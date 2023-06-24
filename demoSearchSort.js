// Linear Search...
import { randiArray } from "../files/spy_qs.js";

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return true;
    }
  }
  return false;
}

// console.log(linearSearch([3, 2, 1, 4, 5, 6, 7], 2));

function binarySearch(arr, target) {
  let mid = arr[Math.floor(arr.length / 2)];
  if (arr[mid] == target) {
    return true; //exit case...
  } else if (arr[mid] < target) {
    //discard the lower half of the array...
    return binarySearch(arr.slice(mid + 1, arr.length), target);
  } else if (arr[mid] > target) {
    return binarySearch(arr.slice(0, mid), target);
  }
  return false;
}

// console.log(binarySearch([3, 2, 1, 4, 5, 6, 7], 2));

// SORT ME: BUBBLE

function bubbleSort(arr) {
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (arr[i] < arr[j]) {
        swap(arr, j, i);
      }
    }
  }
  return arr;
}

// console.log(bubbleSort(randiArray(12, -10, 18)));

// swap function...
function swap(arr, i, j) {
  let temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
}

function selectionSort(arr) {
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    let min = i; //index holding the smallest value
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      swap(arr, min, i);
    }
  }
  return arr;
}

// console.log(selectionSort([7, 4, 5, 9, 8, 2, 2]));
// console.log(selectionSort(randiArray(60, -100,100)));

// INSERTION SORT...
function insertionSort(arr) {
  console.log(arr);
  let value,
    len = arr.length,
    i,
    j;
  for (i = 0; i < len; i++) {
    value = arr[i];
    for (j = i - 1; j > -1 && arr[j] > value; j--) {
      arr[j + 1] = arr[j];
      //shift element at jth position to the (j+1)th position
    }
    arr[j + 1] = value;
  }
  return arr;
}

console.log(insertionSort(randiArray(12, 0, 20)));
