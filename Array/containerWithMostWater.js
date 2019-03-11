
// Given n non-negative integers a1, a2, ..., an,
// where each represents a point at coordinate (i, ai).
// 'n' vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0).

// Find two lines, which together with x-axis forms a container, such that the container contains the most water.


// Logic - Area is Base into height, now think of the maximum base that will be last element and first element
// Now see which one is bigger, last or first element, if the last element is bigger, then let's give the secon element a shoy
// Else now lets give the second element a shot.



containerWithMostWater = A => {
    let r = A.length - 1,l = 0, area = (r-l)*(Math.min(A[r],A[l])), s = 0;
    while(l <= r){
        s = (r-l)*(Math.min(A[r],A[l]));
            if(s > area) area = s;
        if(A[l] > A[r]){
            r--;
        }else{
            l++
        }
    }

    return area;
}

let arr  = [1, 5, 4, 3,9]
console.log(containerWithMostWater(arr));