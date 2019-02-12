/* Given an expression string exp , 
write a program to examine whether the pairs and the orders of “{“,”}”,”(“,”)”,”[“,”]” are correct in exp.
 For example, the program should print yes for exp = “[()]{}{[()()]()}” and no for exp = “[(])”
 */

const Stack = require('./stackImplementation');

function paranthesesChecker(str){
    str = str.toString();
    var s= new Stack();
    for(var i = 0 ; i < str.length ; i++){
        if(str[i] == '('){
            s.push(str[i]);
        }

        if(str[i] == ')'){
            s.pop();
        }
    }

    if(s.length() == 0){
        return true;
    }

    return false;
}

paranthesesChecker((23(4433))) ? console.log('yes') :console.log('false');