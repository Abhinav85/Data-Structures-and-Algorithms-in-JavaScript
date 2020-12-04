var x = 3;

for(r = -x +1 ; r < x; r++ ){
    str ='';
    for(l = -x + 1 ; l < x; l++){
        str += (Math.max(Math.abs(r), Math.abs(l))+1);   
    }
    console.log(str);
}