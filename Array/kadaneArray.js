module.exports = { 
    //param A : array of integers
    //return an integer
       maxSubArray : function(A){
           var sumMax = -1000000;
           var sumTillHere = 0;
          // console.log(sumMax);
           for(var i = 0 ; i < A.length ; i++){
               sumTillHere = sumTillHere + A[i];
               if(sumTillHere > sumMax){
                   sumMax = sumTillHere;
               }
               
               if(sumTillHere <= 0){
                   sumTillHere = 0
               }
           }
           return sumMax;
       }
   };
   