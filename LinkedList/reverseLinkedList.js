const LList = require('./linkedListImplementation').LinkedList;

var data  = new LList();
data.insert(1)
data.insert(2);
data.insert(3);
data.insert(4);
data.insert(5);
data.insert(6);
data.insert(7);
data.insert(8);

var prev = null
var curr = data.head;
var next = null;

while(curr.next != null){
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
}
data.head = prev;

console.log(data.display());

