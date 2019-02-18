// In this question, Binary Search is implemented in the form of finding mids
// We initialse two vars, r and l. l -> 0 and r -> x,
// So we start from the mid of the number x, and then see if its square is equal to x
// If it is, then return it because that's the answer
// Otherwise if it's smaller, then r -> mid -1
// Else l -> mid + 1


sqrt = x =>{
    let l = 0, r = x;
    let mid;
    while(l <= r){
        mid = Math.floor((l + r)/2);
        if(mid * mid === x){
            return mid;
        }
        if(mid * mid < x){
            l = mid + 1;
        }else{
            r = mid - 1;
        }
    }

    return mid;
}

console.log(Math.floor(sqrt(234)));