// Find the intersection of two sorted arrays.
// OR in other words,
// Given 2 sorted arrays, find all the elements which occur in both the arrays.


// Logic - You have two SORTED ARRAYS, now keep this in mind while developing 
// the logic is that you put the arrays side by side, and compare the elements
// If the element in Arr1 is bigger, then inc the pointer for Arr2 or the opposite


intrsctn = (A,B) => {
    let i = 0,j = 0;
    let arr = []
    while(i < A.length && j < B.length){
        if(A[i] < B[j]){
            i++;
        }else if(A[i] > B[j]){
            j++;
        }else if(A[i] === B[j]){
            arr.push(A[i]);
            i++;
            j++;
        }
    }

    return arr;
}


console.log(intrsctn([1 ,2, 3, 3, 4, 5, 6],[3,3,5]));