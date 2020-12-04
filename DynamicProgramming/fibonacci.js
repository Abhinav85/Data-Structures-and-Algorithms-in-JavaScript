function dynFib(n){
    // Excellent way to create new arrays and fill them with a prefeined value
    var val = new Array(n).fill(0);


    if(n === 0 || n === 1){
        return 1;
    }else{
        val[1] = 1;
        val[2] = 2;
        for(i = 3 ; i < n ;i++){
            val[i] = val[i -1] + val[i -2];
        }
    }

    return val[n -1];
}


function dynFibWithoutArr(n){
    if(n === 0 || n=== 1){
        return 1;
    }else{
        var num;
        var last  = 2;
        var nextLast  = 1;
        for(var i = 3 ; i < n ; i++){
            result = last + nextLast;
            nextLast = last;
            last = result;
        }
    }

    return result;
}

console.log(dynFibWithoutArr(10));

