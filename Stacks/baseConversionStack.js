/* This Function is used to convert the base of one number to another
    The idea is that the bumber should be changed into the new base using
    the function given below.
    do{
        s.push(num % base);
        num = Math.floor(num /= base);
    }

    This makes sure that the number going on stack is the converted number
*/

const Stack  = require('./stackImplementation');


function mulBase(num, base){
    console.log(num);
    var s = new Stack();
    do{
        s.push(num % base);
        num = Math.floor(num /= base);
    }while(num > 0);
    var converted  = '';
    while (s.length() > 0){
        converted +=s.pop();
    }
    return converted;
}


var num = 521;
var base = 7;
console.log("converted", mulBase(num,base));


