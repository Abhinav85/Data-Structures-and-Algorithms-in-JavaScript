var nums = [1,100,4,3,5000];
function compare(num1, num2){
    return num1 - num2;
}
nums.sort(compare);
console.log(nums);