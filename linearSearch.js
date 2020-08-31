// Simple

function linearSearch(val,arr) {
  for(i=0;i<arr.length;i++) {
     if(arr[i]===val) return i
     
  }
  return -1
}

linearSearch(4,[3,2,1,2,23,4,5,6,6])