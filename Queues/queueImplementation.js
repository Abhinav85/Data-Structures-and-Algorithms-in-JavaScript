function Queue(){
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}

function enqueue(num){
    this.dataStore.push(num);
}

function dequeue(){
    return this.dataStore.shift();
}

function front(){
    return this.dataStore[0];
}

function back(){
    return this.dataStore[this.dataStore.length -1]
}

function empty(){
    if(this.dataStore.length == 0){
        return true;
    }else
    {
        return false;
    }
}

function toString(){
    return this.dataStore.toString();
}

module.exports = Queue;

