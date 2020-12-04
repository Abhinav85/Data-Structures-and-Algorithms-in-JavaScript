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

var fast = data.head;
var slow = data.head;

while(fast.next != null && fast.next.next != null){
    fast  = fast.next.next;
    slow = slow.next;
}

console.log('Slow Elements',slow.value);
