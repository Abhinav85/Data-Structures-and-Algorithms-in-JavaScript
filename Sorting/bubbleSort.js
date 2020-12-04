const testArray = require('./testArray');

function BubbleSort(s){
    var numElements = s.dataStore.length;
    var temp;
    for(var outer = numElements; outer >= 2; outer--){
        for(var inner = 0; inner <= outer; inner++){
            if(s.dataStore[inner] > s.dataStore[inner + 1]){
                s.swap(s.dataStore,inner,inner+1);
            }
        }
    }
}

var s = new testArray(100);

s.setData();
BubbleSort(s);
console.log(s.toString());
