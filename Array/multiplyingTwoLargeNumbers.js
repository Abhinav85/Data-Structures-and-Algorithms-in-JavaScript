var num1 = '23455';
var num2 = '342342343';

num1.toString();
num2.toString();

var arr1 = num1.toString().split('').map(Number);
var arr2 = num2.toString().split('').map(Number);

var arr3 = [];
var mul = '';
var tempArr = [];

for(var i = 0 ; i < arr1.length ; i++){
    for(var j = 0 ; j < arr2.length ; j++){
        tempArr[i+j] = arr1[i] * arr2[j];
        
    }
}