generateMatrix = A => {
    var a = new Array(A);

    for(var i = 0 ; i < A ; i++){
        a[i] = new Array(A);
    }

    var t = 0, b = A-1, l = 0, r = A -1;

    var d = 0,j = 0,count = 1;

    

    while(t<=b&&l<=r){
        if(d==0){
            for(var i=l;i<=r;i++){
                a[t][i]=count;
                count++;
            }
            d=1;
            t++;
        }
        else if(d==1){
            for(var i=t;i<=b;i++){
                a[i][r]=count;
                count++;
            }
            d=2;
            r--;
        }
        else if(d==2){
            for(var i=r;i>=l;i--){
                a[b][i]=count;
                count++;
            }
            d=3;
            b--;
        }
        else if(d==3){
            for(var i=b;i>=t;i--){
                a[i][l]=count;
                count++;
            }
            d=0;
            l++;
        }
    }

    return a;
}


console.log(generateMatrix(5))