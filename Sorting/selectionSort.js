const testArray = require('./testArray');

function SelectionSort(testArr){
    var min, temp;
    for(var outer = 0; outer < testArr.dataStore.length - 1; outer++){
        min = outer;
        for(var inner = outer + 1; inner < testArr.dataStore.length; inner++){
            if(testArr.dataStore[inner] < testArr.dataStore[min]){
                min = inner;
            }
            testArr.swap(testArr.dataStore,outer,min);
        }
    }
}

var s = new testArray(100);
s.setData();
SelectionSort(s);
console.log(s.toString());