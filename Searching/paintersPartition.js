// You have to paint N boards of length {A0, A1, A2, A3 … AN-1}. 
// There are K painters available and you are also given how much time a painter takes to paint 1 unit of board. 
// You have to get this job done as soon as possible under the constraints that 
// 1 - Any painter will only paint contiguous sections of board.


/*
Logic - 
Think of an array, let's call it Required Time. 
This array would store the time required for the fence to pain if the number of workers was not a hindrance
So the smallest numebr in this array would be the length of the largest board (Each board gets one worker)
The largest number in this array would be the sum of length of all the boards (Only 1 painter)
Now your answer lies somewhere in middle of this, so you know that this is the time for
----------------------------------------BINARY SEARCH--------------------------------------------------


So what's left, nothing much apart from a function that just tells us that will the given no of workers be 
able to perform a particlar task. So how will you create such a function.
Simple - Imagine you had to paint boards of length 10,20,30,60,80
How may workers would you require if the time taken had to be less than 90 (The minimum time can not be less than 80)
You'll assign 1 ,2 ,3 to 1 worker
2 to second
and 3 to third worker

So you require 3 workers, any less and you can't perform.

Now connect the dots. Binary Search and one condition
*/

paint = (A,B,C) => {
    var end = 0;
        for (var i=0;i<C.length;i++) end+=C[i];
        var start = 1;
        var mid = 1;
        
        var bestMid = Number.MAX_VALUE;
        while (start <= end){
            mid = Math.floor((start + end) / 2);
            if (!isPossible(A, C, mid)){
                start = mid + 1;
            } else {
                end = mid - 1;
                if (bestMid > mid){
                    bestMid = mid;
                }
            }
        }
        
        return (bestMid % 10000003 * B % 10000003) % 10000003;
}

isPossible = (A,C,mid) => {
    var sum = 0;
        for (var i=0;i<C.length;i++){
            if (C[i] > mid) return false;
            if (sum + C[i] <= mid){
                sum += C[i];
            } else {
                A--;
                if (A == 0) return false;
                sum = C[i];
            }
        }
        
        return true;
}

console.log(paint(2, 1, [10,20,40]));