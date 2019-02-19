// Question  - You are given a string S, and you have to find all the amazing substrings of S.

// Amazing Substring is one that starts with a vowel (a, e, i, o, u, A, E, I, O, U).

// Input
//     ABEC

// Output
//     6

// Explanation
// 	Amazing substrings of given string are :
// 	1. A
// 	2. AB
// 	3. ABE
// 	4. ABEC
// 	5. E
// 	6. EC
// 	here number of substrings are 6 and 6 % 10003 = 6.

// Answer - The moment you reach a vowel, subtract it's location from the the array of length;

amazingSubArrays = A => {
    let sum = 0;
    A.toLowerCase();
    for(var i = 0 ; i < A.length ; i++){
        if(A[i] === 'a' || A[i] === 'e' || A[i] === 'i' || A[i] === 'o' || A[i] === 'u'){
            sum += A.length - i; 
        }
    }

    return sum;
}

console.log(amazingSubArrays('adasd2dwdfqwdqwddsd'));