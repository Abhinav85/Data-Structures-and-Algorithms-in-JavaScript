// This is the implementation of Binary Search
// Binaru Search is a very smart method 
// I'll add the explanation later

function binarySearch(num,arr){
    if(arr.length === 1){
        if(arr[0] === num){
            return 0;
        }
    }

    var upperbound = arr.length - 1;
    var lowerBound = 0;
    while(upperbound >= lowerBound){
        let mid = Math.floor((upperbound + lowerBound) /2);
        if(arr[mid] > num){
            upperbound = mid - 1;
        }else if(arr[mid] === num){
                return mid;
        }
         else{   
            lowerBound = mid + 1;
        }
    }

    return -1;
}


let x = 45;
let xq = [1,2,3,4,5,6,7,345];
console.log(binarySearch(x,xq));