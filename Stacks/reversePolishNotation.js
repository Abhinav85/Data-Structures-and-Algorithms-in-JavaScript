// Evaluate the value of an arithmetic expression in Reverse Polish Notation.

// Valid operators are +, -, *, /. Each operand may be an integer or another expression.

// Examples:

//   ["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9
//   ["4", "13", "5", "/", "+"] -> (4 + (13 / 5)) -> 6

// Answer - Create a stack for numbers, now whenever you enocunter any operator
// Pop the last two numbers in the stack, perform the operation on them,
// And push the result in the stack


// To-Do - Rewrite the operation in the stacks as we know (Do we Really need to though??)


let A = [ "5", "1", "2", "+", "4", "*", "+", "3", "-" ];
let nums = [], num1, num2;

for(let i = 0; i < A.length ; i++){
    if(!(A[i] === '+' || A[i] === '-' || A[i]=== '*' || A[i] === '/')){
        // Push the numbers in a stack
        nums.push(A[i]);
    }else{
        let op = A[i];
        if(op === '+'){
            num1 = +(nums.pop());
            num2 = +(nums.pop());
            nums.push(Math.floor(num1 + num2));
        }
        if(op === '-'){
            num1 = +(nums.pop());
            num2 = +(nums.pop());
            nums.push(Math.floor(num2 - num1));
        }
        if(op === '/'){
            num1 = +(nums.pop());
            num2 = +(nums.pop());
            nums.push(Math.floor(num2 / num1));
        }
        if(op === '*'){
            num1 = +(nums.pop());
            num2 = +(nums.pop());
            nums.push(Math.floor(num1 * num2));
        }
    }
}

console.log(nums.pop());

