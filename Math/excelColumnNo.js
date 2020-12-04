// The question is to make a system that finds the column number in a system similar to that of excel
// So A -> 1, B->2 .... AA-> 27

// The solution is similar to a binary to decimal conversion, just that the number of bases are more
// So AB = 26 + 2
// CDA = 3*26*26 + 4*26 + 1

// Below is the implementation

excelColmnNo = (A) => {
    var result = 0; 
    var s= 'A';
    for (var i = 0; i < A.length ; i++) 
    { 
        result *= 26; 
        result += A.charCodeAt(i) - s.charCodeAt(0)  + 1; 
        console.log(result);
    } 
    return result; 
}

console.log(excelColmnNo('A'))
