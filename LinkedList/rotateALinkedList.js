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




/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var rotateRight = function(head, k) {
    // Find length of ll
    let curr = head;
    let lnth = 0;
    
    while(curr && curr.next){
        lnth = lnth + 1;
        curr = curr.next;
    }
    
    // We add 1 because obviously
    lnth = lnth + 1
    
    // if ll is smaller than 2, send back the linkedlist
    if(lnth < 2) return head;
    
    let toRotate = k % lnth;
    
    
    // If toRotate === 0, return the original ll
    if(toRotate === 0) return head;
    
    // We make the list cycylic, so that once we reach to the point where we have to do the skipping, we just terminate that end, and not worry about the connection
    curr.next = head;

    
    // How many to skip 
    let toSkip = lnth - toRotate;
    
    curr = head;
    
    // Skip the appropriate poitions
    while(toSkip > 1){
        curr = curr.next;
        toSkip = toSkip - 1;
    }
    
    
    // Break the loop here, and set the head as the new position
    head = curr.next;
    curr.next = null;
    
    return head
        
};
