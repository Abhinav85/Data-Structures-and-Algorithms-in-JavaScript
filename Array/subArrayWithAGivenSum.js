/*Given an unsorted array of nonnegative integers, find a continous subarray which adds to a given number. */

/* The underlying logic is to run two pointers r and l in the array
    Initialise a variable currSum that holds the value of the current sum between r and l
    For it's initial value let it be the first element of the array
    Now if the sum < currSum, move r one step right and also add the value it contains
    And if  sum < currSum, move l one step forward, and remove the value it contains from currSum

    Return when you find the value. And try to figure out why we removed one from the right index in the final answer
    Hint : See where you initialised r from, so was it present initially in the 

    Eventually you'll reach the required value
*/

subArrGivenSum = (arr,sum) => {
    // currSum initiailsed
    var currSum = arr[0];
    var r = 1, l = 0;
    while(r >= l){
        if(currSum === sum){
            return ({l,r : r -1});
        }else if( currSum > sum){
            currSum = currSum - arr[l];
            l++;
        }else if(currSum < sum){
            currSum = currSum + arr[r];
            r++;
            
            
        }

        if(r === arr.length){
            return -1;
            break;
        }
    }
}

console.log(subArrGivenSum([15, 2, 4, 8, 9, 5, 10, 23],25));