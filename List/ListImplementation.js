function List(){
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.length = length;
    this.contains = contains;
}

function append(element){
    this.dataStore[this.listSize++] = element;

};

function find(element){
    return(this.dataStore.indexOf(element));

}

function remove(element){
    var foundAt = this.find(element);
    if(foundAt > -1){
        this.dataStore.splice(foundAt,1);
        --this.listSize;
        return true;
    }
    return false;
}

function length(){
    return this.listSize;
}

function toString(){
    console.log(this.dataStore);
}

function insert(element,after){
    var insertPos = this.find(after);
    if(insertPos > -1){
        this.dataStore.splice(insertPos+1,0,element);
        ++this.listSize;
        return true;
    }
    return false;
}

function clear(){
    this.dataStore = [];
    this.listSize = this.pos = 0
}

function contains(element){
    return this.dataStore.includes(element);
}

function front(){
    this.pos = 0;
}

function end(){
    this.pos = this.listSize - 1;
}

function prev(){
    if(this.pos == 0){
        this.pos  = this.listSize -1;
    }else if(this.pos > 0){
        --this.pos;
    }
}

function next(){
    if(this.pos >= this.listSize -1){
        this.pos = 0;
    }else if(this.pos < this.listSize -1){
        ++this.pos;
    }
}

function currPos(){
    return this.currPos;
}

function moveTo(position){
    if(position < this.listSize)
    this.pos = position;
}

function getElement(){
    console.log(this.pos);
    console.log(this.dataStore[this.pos]);
}

var name = new List();
name.append('David');
name.append('Gintoki');
name.append('Kagura');
name.append('Shinpachi');
name.find('Kagura');
name.length();
name.toString();
name.remove('Shinpachi');
name.insert('Shinpachi','David');
name.toString();
name.prev();
name.getElement();
name.next();
name.getElement();
name.clear();
name.toString();

