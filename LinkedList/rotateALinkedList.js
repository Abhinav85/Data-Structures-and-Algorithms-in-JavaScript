// Given a singly linked list, rotate the linked list counter-clockwise by k nodes. 
// Where k is a given positive integer. 
// For example, if the given linked list is 10->20->30->40->50->60 and k is 4, 
// the list should be modified to 50->60->10->20->30->40. 
// Assume that k is smaller than the count of nodes in linked list.


const {LinkedList, Node} = require('./linkedListImplementation');

var data = new LinkedList();
data.insert(1);
data.insert(2);
data.insert(3);
data.insert(4);
data.insert(5);
data.insert(6)
data.insert(7)
data.insert(8)

function rotateLList(list,k){
    var prev = list.head;
    var curr = list.head;
    var firstHead = list.head;
    var i = 0;
    while(curr.next !== null){
        if(i === k){
            list.head = curr
            prev.next = null;
        }
        prev = curr;
        curr = curr.next;
        i++;
        
    }

    curr.next = firstHead
    console.log(list.display());
}
rotateLList(data,6);
