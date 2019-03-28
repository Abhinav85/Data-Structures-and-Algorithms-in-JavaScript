// Different Methods of Finding Unique Subsets when the elements are provided in an array;


// Non Recursive Method
// loops over the elements like madman
powerSet = (A) => {
    var obj = {};
    for(var i = 0; i < A.length ; i++){
        obj[A[i]] = true;
    }

    var arr = Object.keys(obj);

    for(var i = 0 ; i < arr.length ; i++){
        arr[i] = +(arr[i])
    }

    var res = [[]];

    for(var i = 0; i < arr.length ;i++){
        var len = res.length;
        for(var x= 0 ; x < len ;x++){
            res.push(res[x].concat(arr[i]))
        }
    }
    return res;
}

// Smart JavaScript Method
// Reduce the array (Perform the concat funcrion on all the elements provided)
// The concat function returns individual arrays


getAllSubsets =  theArray => theArray.reduce(
    // Reducer takes the value achieved in the previous step, so this step is importantt o have all the arrays
        (subsets, value) => subsets.concat(
    // This adds the current set and add the next value to it
         subsets.map(set => [...set,value])
        ),
    // Add the results in an array, initialise the array with a blank variablle
        [[]]
        );





// Recursive Method

subsetsRecursive = (A) => {
    let res = [];
    A.sort(function(a,b) {return a-b;}); // Not using simple sort because it sorts lexicographically

    recurse = (currIndex, soFar) => {

        // Push a copy of the array into the resultant arr
        // If ES6 feature like ... is not supported, use arr.slice() to make a copy
        res.push([...soFar]);

        for(let i = currIndex; i < A.length ;i++){
            // Pushing futher elements into So far
            soFar.push(A[i]);
            // Going a level below in the logic
            recurse(i+1,soFar);
            // Popping out the last element, still have to understand in detail
            // Any Help regarding thiw ould be quite appereciated
            soFar.pop();
        }
    }

    recurse(0,[]);

    return res;
}

let testArr = [3,4,1,2,9]

console.log('Non Recursive Solution - ',powerSet(testArr));
console.log('Smart JavaScript Solution - ',getAllSubsets(testArr));
console.log('Recursive Solution - ',subsetsRecursive(testArr))