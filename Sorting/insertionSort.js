var testArr = require('./testArray');

function InsertionSort(s){
    var temp,inner;
    for( var outer = 1; outer < s.dataStore.length;outer++){
        temp = s.dataStore[outer];
        inner = outer;
        while(inner > 0 && (s.dataStore[inner -1]>= temp)){
            s.dataStore[inner] = s.dataStore[inner -1];
            --inner;
        }
        s.dataStore[inner] = temp;
    }
}

var s = new testArr(100);
s.setData();
InsertionSort(s);
console.log(s.toString());
