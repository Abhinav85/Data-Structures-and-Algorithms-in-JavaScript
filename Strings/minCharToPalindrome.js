
/*You are given a string. The only operation allowed is to insert characters in the beginning of the string. 
How many minimum characters are needed to be inserted to make the string a palindrome string
*/


// Logic - Add the last digit in front of the Question (One by one), and then just see if it is a palindrome or not.
// No huss no fuss.



minCharToPalindrome = (A) => {
    var newStr = '';

    if(A.split('').reverse().join('') === A) return 0;
	    
	    for(var i = 0 ; i < A.length ; i++){
            newStr += A[A.length - 1 - i];
	        
            var pStr = newStr
	        
            pStr = pStr + A;
            var nStr = pStr.split('').reverse().join('');
            if(nStr === pStr) return i+1;
        }

        return -1;
}

console.log(minCharToPalindrome('cecar'));



