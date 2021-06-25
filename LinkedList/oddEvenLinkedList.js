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
 var oddEvenList = function(head) {
    
    if(!head || !head.next){
        return head
    }
    // Eh and Oh are the odd and even heads, the ehc is the head that'll eventually point to the even head
    // This is the mistake I was doiung before, loosing the value of ehc.
    // head will anyway store the off part of ll, it's the ehc which will store the even part
    // after that this is just leapfrogging
    let eh = head.next;
    let oh = head;
    const ehc = head.next
    
    while(eh && eh.next){
        console.log("Eh,oh1", eh, oh,head,ehc)
        oh.next = oh.next.next;
        oh = oh.next;
        eh.next = eh.next.next;
        eh = eh.next;
        console.log("Eh,oh2", eh, oh,head,ehc)

    }
    console.log(ehc)
    
    oh.next = ehc
    oh = head
    return oh
     
    
};