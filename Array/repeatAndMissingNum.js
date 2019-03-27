//Question -  You are given a read only array of n integers from 1 to n.

// Each integer appears exactly once except A which appears twice and B which is missing.

// Return A and B.



// Answer - 
// The point is to use the array as an index for itself. So make an object, or an array (Your choice really)
// And then just keep a track of wether you have visited the element before or not. 
// In the question asked, the array was not to be tampered with, or else you can also use the array itself.


// Once you have the repeated number, finding the missing number is easy. Especially in the case of Javascript
// as you don't have to worry about Stack overflow for upto 15 digits


// Todo - There are more than one way to solve it. I will add those methods later on along with explanation

repeatAndMissing = A => {
    var numbers = {};
    var missing , repeated, sumActual = 0 ; sumExpected = 0;

    A.forEach((element,index) => {
        if(numbers[element]) repeated = element;
        else numbers[element] = true;

        sumExpected += index + 1;
        sumActual += element;
    });

    missing = sumExpected - (sumActual - repeated);
        
    return([repeated,missing]);

}

console.log(repeatAndMissing([3,2,4,1,4]));