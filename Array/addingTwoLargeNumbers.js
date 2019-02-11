var num1 = 300912312312312321;
var num2 = '33000000';
num1.toString();
num2.toString();

var arr1 = num1.toString().split('').map(Number);
var arr2 = num2.toString().split('').map(Number);
console.log(arr1);
console.log(arr2);


arr1.reverse();
arr2.reverse();

var arr3 = [];
var sum = 0;
var carry = 0;

if(arr1.length >= arr2.length){
    for(key in arr1){
        if(arr2[key] === undefined){
            arr2[key] = 0;
        }

        sum = Math.floor(((arr1[key] + arr2[key])%10 + carry));
        carry = Math.floor((arr1[key] + arr2[key])/10);

        arr3[key] = sum;

    }
    console.log(arr1);
    console.log(arr2);
}else{
    for(key in arr2){
        if(arr1[key] === undefined){
            arr1[key] = 0;
        }
        sum = Math.floor((arr1[key] + arr2[key])%10 + carry);
        carry = Math.floor((arr1[key] = arr2[key])/10);

        arr3[key] = sum; 
    }
    console.log(arr1);
    console.log(arr2);
}
console.log(arr3.reverse())