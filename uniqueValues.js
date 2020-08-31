 function uniqueValues(arr) {
   if(arr.length==0){
     return 0
   } 
   var i=0;
   for(let j=1;j<arr.length;j++) {
     if(arr[i] !== arr[j]) {
       i++
       arr[i]=arr[j]
     }
     // console.log(i,j)
   }
   return i+1
 }

 uniqueValues([1,1,2,2,2,3,3,4,4,4,5,6,6,7,8]);