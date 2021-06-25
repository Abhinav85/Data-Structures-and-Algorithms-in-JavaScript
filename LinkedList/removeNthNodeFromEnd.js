/**
 * 
 * 
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.
 * 
 * 
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    let lnth = 0
    let curr = head;
    
    // Find the length of the ll
    while(curr){
        lnth = lnth + 1;
        curr = curr.next;
        
    }
    
    // Find out how many elements you have to skip
    let toSkip = lnth - (n);
    curr = head;
    
    // If you have to skip the first one, return head.next
    if(toSkip == 0) return curr.next
    
    
    // We start from 1 because we want to arrive at the element before the element we want to skip, not at that element
    
    for(let i = 1; i < toSkip ; i++){
        curr = curr.next;
    }
    
    // If it's the last element, that's why the if condition
    
    if(curr.next === null) {
        curr.next = null
    }else{
        curr.next = curr.next.next;
    }
    
    return head
    
};