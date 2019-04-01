// Given a list of non negative integers, arrange them such that they form the largest number.

// For example:

// Given [3, 30, 34, 5, 9], the largest formed number is 9534330.


// Answer. 

// This question is a take on Sorting. We need a sorting implementation that takes two strings and returns
// String 1 if the string1 + string2 is larger or the opposite. 





largestNumber = A => {

    // The custom comparator function. The problem with normal Sorting function was that although it was
    // lexicographical, it still brought 30 in front of 3(Just an example.)
    
    cmp = (a,b) => {
        return('' + a +b) > ('' + b + a) ? -1 : 1;
    }

    A.sort(cmp);

    var res = A.join('');
    return parseInt(res) === 0 ? '0' : res;

}


console.log(largestNumber([ 472, 663, 964, 722, 485, 852, 635, 4, 368, 676, 319, 412 ]));