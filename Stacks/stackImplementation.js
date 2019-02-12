/* As the Javascript functions lack an inbuilt stack,
    This is a stack implementation in JavaScript
    The functions that are available are 
    1. Push
    2. Pop
    3. Peek
    4. Length

    These functions are implemented in the manner they're defined in classical textbooks
    */

function Stack(){
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.length = length;
    
}


function push(element){
    this.dataStore[this.top++] = element;
}

function pop(){
    return this.dataStore[--this.top];
}


function peek(){
    return this.dataStore[this.top - 1];
}

function length(){
    return (this.top);
}


module.exports = Stack;


