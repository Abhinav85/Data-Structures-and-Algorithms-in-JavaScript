/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let ans = new ListNode();
    let ansh = ans;
    let carry = 0
  
  
    // While l1 and l2 both are present, add for both of them
    while(l1 && l2){
        if(l1 && l2){
            ans.next = new ListNode(((l1.val + l2.val + carry)%10),undefined);
            carry = Math.floor((l1.val + l2.val + carry) / 10); 
            l1 = l1.next;
            l2 = l2.next;
            ans = ans.next
        }
    }
    
    // If l2 is lover, keep on adding l1 along with any carry
    while(l1){
        ans.next = new ListNode(((l1.val + carry)%10),undefined);
        carry = Math.floor((l1.val + carry) / 10); 
        ans = ans.next;
        l1 = l1.next;
    }
    
    
    // if l1 is over, keep on adding l2 along with carry
    while(l2){
        ans.next = new ListNode(((l2.val + carry)%10),undefined);
        carry = Math.floor((l2.val + carry) / 10); 
        ans = ans.next;
        l2 = l2.next;
    }
    
    // If only carry remains, add it
    if(carry){
        ans.next = new ListNode(((carry)%10),undefined);
    }
    
    // Return the new head
    return ansh.next
};