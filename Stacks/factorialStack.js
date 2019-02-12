// This program finds factorial using either recursion and stacks

const Stack = require('./stackImplementation');

function factorialUsingRecursion(num){
    if(num == 0){
        return 1;
    }else{
        return num * factorialUsingRecursion(num - 1);
    }
}

function factorialUsingStack(num){
    var s = new Stack();
    while(num > 1){
        s.push(num--);
    }

    var product = 1;
   while(s.length() > 0){
       product *= s.pop();
   }

   return product;
}
console.log(factorialUsingRecursion(170));
console.log(factorialUsingStack(170));