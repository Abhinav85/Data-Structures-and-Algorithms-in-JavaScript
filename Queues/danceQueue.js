const Queue = require('./queueImplementation');
var fs = require('fs');

function Dancer(name ,sex){
    this.name = name;
    this.sex = sex;
}

var femQ = new Queue();
var maleQ = new Queue();

fs.readFile('./Dancer.txt', 'utf8',function(err, data){
    var name = data.split('\n');
    for (key in name){
        var person = name[key].split(' ');
        var sex = person[0];
        var personName = person[1];
        if(sex === 'F'){
            femQ.enqueue(new Dancer(personName,sex));
        }else{
            maleQ.enqueue(new Dancer(personName,sex));
        }
    }

    danceList(femQ,maleQ);
});


function danceList(fQ, mQ){
    console.log('The dance partners are-');
    while(!fQ.empty() && !mQ.empty()){
        person = fQ.dequeue();
        console.log('Person Female - ', person.name);
        person = mQ.dequeue();
        console.log('Person Male',person.name);
    }
}