var readline = require('readline');

var rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

var names = ['David','Cynthia','Raymond'];
rl.question("enter a name to search for", function(name){
 callerFunction(name);
});

callerFunction = (name) => {
    var position = names.indexOf(name);
    if(position >= 0){
        console.log(position);
    }else{
        console.log("Not in the array");
    }
    rl.close();
}