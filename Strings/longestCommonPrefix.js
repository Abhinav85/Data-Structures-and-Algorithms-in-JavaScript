// Write a function to find the longest common prefix string amongst an array of strings.
// Longest common prefix for a pair of strings S1 and S2 is the longest string S which is the prefix of both S1 and S2.
// As an example, longest common prefix of "abcdefgh" and "abcefgh" is "abc".
// Given the array of strings, you need to find the longest S which is the prefix of ALL the strings in the array

//  ANSWER - 
// The logic is that first loop goes through the first string in A[0], taking it's element letter by letter
// The second for loop goes through the other string in the array
// The clever part is this ( if( i === A[j].length || A[j][i] !== char)). This makes sure that the elemnts are matched and
// the smalles aray is never jumped upon.

longestCommonPrefix = A =>{
    if(A.length === 0) return '';
    for(let i = 0 ; i < A.length ;i++){
        let char = A[0][i];
        for(var j = 1; j < A.length ; j++){
            if( i === A[j].length || A[j][i] !== char){
                return A[0].substring(0,i);
            }
        }
    }
    return A[0];
}

console.log(longestCommonPrefix(['asdsad','asdasdasd','asdasdsadasd']));