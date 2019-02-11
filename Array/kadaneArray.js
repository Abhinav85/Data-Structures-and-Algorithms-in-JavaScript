
function maxSubArray(A){
    var sumMax = -1000000;
    var sumTillHere = 0;
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

console.log(maxSubArray([1,2,-3,4,5,6, -2 ,-4 ,5 ]));
   