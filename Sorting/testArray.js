function CArray(numElements){
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.insert = insert;
    this.toString = toString;
    this.clear = clear;
    this.setData = setData;
    this.swap = swap;

    for(var i = 0 ; i < numElements ; i++){
        this.dataStore[i] = i;
    }
}

function setData(){
    for(var key in this.dataStore){
        this.dataStore[key] = Math.floor(Math.random()*100);
    }
}


function insert(element){
    this.dataStore[this.pos++] = element;
}

function toString(){
    let str = '';
    for(var key in this.dataStore){
        str += ' ' + this.dataStore[key];
    }

    return str;
}

function swap(arr, index1, index2){
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function clear(){
    for(var key in this.dataStore){
        this.dataStore[key] = 0;
    }
}


module.exports = CArray;