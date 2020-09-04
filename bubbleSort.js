// Optimized BubbleSort with noSwaps
function bubbleSort(arr){
  var noSwaps;
  for(var i = arr.length; i > 0; i--){
    noSwaps = true;
    for(var j = 0; j < i - 1; j++){
      if(arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwaps = false;         
      }
    }
    if(noSwaps) break;
  }
  return arr;
}

bubbleSort([8,1,2,3,4,5,6,7]);





// Second type
function bubbleSort(arr){
  for(var i = arr.length; i > 0; i--){
    for(var j = 0; j < i - 1; j++){
      // console.log(arr, arr[j], arr[j+1]);
      if(arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;         
      }
    }
  }
  return arr;
}
bubbleSort([8,1,4,2,3,4,5,6,7]);
//  [arr[idx1],arr[idx2]]=[arr[idx2],arr[idx1]];



// Most basic type

const swap=(arr,idx1,idx2)=> {
  
  for(let i=0;i<arr.length;i++) {
    for(j=0;j<arr.length;j++) {
      if(arr[j]>arr[j+1]) {
        let temp=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=temp
      }
    }
   
  }
  return arr
}
