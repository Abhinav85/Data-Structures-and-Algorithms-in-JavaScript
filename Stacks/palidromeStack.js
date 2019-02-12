// Given a string, write a JavaScript function to check if it is palindrome or not. 
// A string is said to be palindrome if reverse of the string is same as string. 
// For example, “abba” is palindrome, but “abbc” is not palindrome.

const Stack =  require('./stackImplementation');

function isPalindromeOrNot(str){
    var s = new Stack();
    for( var i = 0 ; i < str.length ; i++){
        s.push(str[i]);
    }
    var reverseStr = '';
    while(s.length() > 0){
        reverseStr += s.pop();
    }
    return(reverseStr === str);
}



isPalindromeOrNot('racecar') ? console.log('Yes') : console.log('No');