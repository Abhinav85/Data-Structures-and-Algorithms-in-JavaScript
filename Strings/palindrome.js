// Q - A string is WebGLActiveInfo, consider only aplhanumeric characters and remove any other characters

// See if this is a palidrome or not

// Remove all other characters with Regex

// Then lowercase

// Then check for Palindrome. Khamm bas

isPalindrome = A => {
    var str = '';

    str = A.replace(/[^A-Za-z0-9]/g, '');
    
    str = str.toLowerCase();


    var r = 0; l = str.length -1;
    while(r < l){
        if(str[r] === str[l]){
            r++;
            l--;
        }else{
            return 0;
        }
    }

    return 1;
}

console.log(isPalindrome("a"));