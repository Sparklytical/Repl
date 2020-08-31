// Normal Type
 const factorial=(num)=> {
   let total=1;
   for(let i=num;i>1;i--) {
     total *=i
   }
   return total;
 }

 factorial(4)


 // Recursion

  const factorial=(num)=> {
   if(num===1) return 1
   return num* factorial(num-1)
 }

 factorial(2)