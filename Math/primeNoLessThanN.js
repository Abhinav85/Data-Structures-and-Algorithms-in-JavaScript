var x = 121;

let indArr  = [];

for(let i = 0 ; i < x ; i++){
    indArr.push(true);
}

for(let i = 0 ; i < Math.sqrt(x);i++){
    if(indArr[i]){
        for(let j = i**2 ; j < Math.sqrt(n) ; j++ ){}
    }
}

console.log(indArr.length);