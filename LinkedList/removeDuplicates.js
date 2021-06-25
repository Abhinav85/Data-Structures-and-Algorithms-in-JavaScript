// Q - Remove Duplicates from sorted linked list

// Ans - Compare the curr node with next node, if next node is same as current
// Move to the next node of the next node. Also change the curr to next

const LList = require('./linkedListImplementation').LinkedList;


let list = new LList();

list.insert(1);
list.insert(1);
list.insert(1);
list.insert(1);
list.insert(1);
list.insert(1);
list.insert(1);
list.insert(1);
list.insert(2);
list.insert(2);
list.insert(2);
list.insert(2);
list.insert(2);
list.insert(2);
list.insert(2);
list.insert(2);

list.insert(3);
list.insert(4);
list.insert(4);
list.insert(5);
list.insert(5);
list.insert(5);
list.insert(5);
list.insert(5);
list.insert(5);
list.insert(5);


removeDuplicates = llist => {
    var curr = llist.head, next;
    while(curr.next != null){
        if(curr.value === curr.next.value){
            next = curr.next.next;
            curr.next = null;
            curr.next = next;
        }else{
            curr = curr.next;
        }

    }

    return llist;
}

console.log(removeDuplicates(list));



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
 var deleteDuplicates = function(head) {
    let curr = head;
    
    while(curr && curr.next !== null){
        // If the next element is duplicate, go the next of next
        if(curr.next.val == curr.val){
                curr.next = curr.next.next;
            }else{
                curr = curr.next
            } 
        }
    
    return head
};