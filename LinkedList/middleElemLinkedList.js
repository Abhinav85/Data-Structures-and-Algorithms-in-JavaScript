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
//  var middleNode = function(head) {
//     let jump1 = head;
//     let jump2 = head;
    
//     while(jump2 && jump2.next){
//         jump1 = jump1.next;
//         jump2 = jump2.next.next
        
//     }
    
    
//     return jump1
    
    
    
// };
