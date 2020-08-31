// Original Solution
function binarySearch(val,arr) {
  let start=0
  let end=arr.length-1;
  let middle=Math.floor((start+end)/2);

  while(arr[middle] !==val && start<=end) {
    if(val<arr[middle]) {
      end=middle-1;
    } else {
      start=middle+1
    }
    middle=Math.floor((start+end)/2);
  }
  if(arr[middle]==val) {
    return middle
  } return -1
}

binarySearch(4,[1,2,3,4,5,6,7,8,9,10])


// Refactored

function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

binarySearch([2,5,6,9,13,15,28,30], 103)