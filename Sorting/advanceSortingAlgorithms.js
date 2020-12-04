const testArr = require('./testArray');


var gaps = [701,301,132,57,23,10,4,1]


// ShellSort Function
function shellSort(s){
    // Advanced Implementation of Insertion Sort
    for(var g = 0 ; g < gaps.length;g++){
        var gap = gaps[g];
    }
    for(var i = gap;i < s.length;i++){
        var temp = s.dataStore[i];
        for(var j = i; j >= gaps[g] && s.dataStore[j - gaps[g]] > temp;j-= gaps[g]){
            s.dataStore[j] = s.dataStore[j - gaps[g]]
        }
        s.dataStore[j] = temp;
    }
}


// var s = new testArr(10000);
// shellSort(s);
// console.log(s.toString());

// MergeSort Function
function mergeSort(s){
    if(s.length == 1){
        return s;
    }

    const middle = Math.floor(s.length / 2);
    const left = s.slice(0,middle);
    const right  = s.slice(middle);
    return merge(mergeSort(left),mergeSort(right));
}

function merge(left,right){
    let result = []
  let indexLeft = 0
  let indexRight = 0

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft])
      indexLeft++
    } else {
      result.push(right[indexRight])
      indexRight++
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}
// var s = new testArr(10);
// s.setData();

// var t = s.dataStore;
// console.log(mergeSort(t));


// QuickSort Algorithm
function qSort(arr){

    if(arr.length === 0){
        return [];
    }

    var lesser = [];
    var pivot = arr[0];
    var greater = [];
    for(var i = 1 ; i < arr.length ; i++){
        if(arr[i] < pivot){
            lesser.push(arr[i]);
        }else{
            greater.push(arr[i]);
        }
    }

    return qSort(lesser).concat(pivot,qSort(greater));
}

var s = new testArr(10);
s.setData();

var t = s.dataStore;
console.log(qSort(t));