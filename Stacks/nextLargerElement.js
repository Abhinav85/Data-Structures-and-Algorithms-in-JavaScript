// Given an array, print the Next Greater Element (NGE) for every element. 
// The Next greater Element for an element x is the first greater element on the right side of x in array.
//  Elements for which no greater element exist, consider next greater element as -1.

/* The underlying logic is that push the last element of array into the stack
    Now start moving forward from backward in the arr. 
    Compare the  current element from the previousy stored element in the stack
    And remove the elemnts from stack if the element in stack is smaller than the current element in arr
    If the stack becomes empty, then push -1 for that position in the resArr
    Or else push the next larger element found in the stack  in the resArr. Then push the currElem in the stack
    So that this process can be repeated again

    

    One of the problems I can think with this approach is the extra space complexity of the new arr


*/


const stack  = require('./stackImplementation');

nxtLrgrElem = (arr) => {
    let stk = new stack();
    var resArr = [];

    for(var i = arr.length - 1; i >= 0 ; i--){
        

        if(stk.length() !== 0){
            while(stk.length() !== 0 && stk.peek() <= arr[i]){
                stk.pop();
            }
        }
        
        resArr[i] = (stk.length() == 0) ? -1 : stk.peek();

        stk.push(arr[i]);
        
    }
    
    console.log('resArr',resArr)
}

nxtLrgrElem([1,9,2,4,6,7,8]);