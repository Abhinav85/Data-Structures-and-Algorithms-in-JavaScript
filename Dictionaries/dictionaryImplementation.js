function Dictionary(){
    this.dataStore = new Array();
    this.add = add;
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
    this.sort = sort;
}

function add(key,value){
    this.dataStore[key] = value;
}

function find(key){
    return this.dataStore[key];
}

function remove(key){
    delete this.dataStore[key];
}

function showAll(){
    for(key in this.dataStore.sort()){
        console.log('Key - ',key,"   ",'value - ', this.dataStore[key]);
    }
}


function sort(){
    return this.dataStore.sort();
}

var dic = new Dictionary();
dic.add('one','onne');
dic.add('ztwow','three');
dic.add('threew','two');
// dic.sort();
dic.remove(3);
dic.showAll();