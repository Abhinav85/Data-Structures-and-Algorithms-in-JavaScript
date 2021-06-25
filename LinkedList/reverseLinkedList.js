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

var prev = null // This is the head of the new reversed linked list
var curr = data.head;
var next = null;   // This is so that we don't loose the pointer after reassiging head

while(curr.next != null){
    next = curr.next; // Store the refernce to firther linked list before we lose it
    curr.next = prev; // Turn the reference of the current nide the the previous node
    prev = curr; // Move the previous to the current node for next iteration
    curr = next; // Move the current to next node for the next iteration
}
data.head = prev;

console.log(data.display());




/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//  var reverseList = function(head, previous = null) {
    
//     if (head == null) return previous;
//     let next = head.next;
//     head.next = previous;
//     return reverseList(next,head)
    
    
// }

