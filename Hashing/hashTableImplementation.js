function HashTable(){
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.showDistro = showDistro;
    this.put = put;
}

function put(data){
    var pos = this.simpleHash(data);
    this.table[pos] = data;
}

function simpleHash(data){
    var total = 0;
    for(var i = 0 ; i < data.length ; i++){
        total += data.charCodeAt(i);
    }

    return total % this.table.length;
}

function showDistro(){
    for(var i = 0 ; i < this.table.length; i++){
        if(this.table[i] != undefined){
            console.log(i,'   ',this.table[i])
        }
    }
}

var hashT = new HashTable();
var carArr = [ "Ford", "BMW", "Fiat" ];
for(var value of carArr){
    hashT.put(value);
}

hashT.showDistro();