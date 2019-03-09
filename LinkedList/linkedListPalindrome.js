// Q - Given a singly linked list, determine if its a palindrome.
// Return 1 or 0 denoting if its a palindrome or not, respectively.


//Answer - 
// This method takes O(n) time and O(1) extra space.
// 1) Get the middle of the linked list.
// 2) Reverse the second half of the linked list.
// 3) Check if the first half and second half are identical.
// 4) Construct the original linked list by reversing the second half again and attaching it back to the first half

const LList = require('./linkedListImplementation').LinkedList;

let pal = new LList();

pal.insert(1);
pal.insert(2);
pal.insert(3);
pal.insert(4);
pal.insert(3);
pal.insert(2);
pal.insert(1);

linkedListPalindrome = () => {
    let mid = pal.head, end = pal.head;

    // Finding the middle of the Linked list

    while(1){
        if(end.next === null || end.next.next === null) break;
        mid = mid.next;
        end = end.next.next;
    }

    // Reversing the second half of the linked list
    var prev = null
    var curr = mid.next;
    var next = null;

    // If just one lement then return 1;
    if(curr === null) return 1;

    while(curr.next != null){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    curr.next = prev;
    mid.next = curr;


    // Comparing the Linked lists first and second half

    let start = pal.head;

    while(mid.next != null){
        if(mid.next.value === start.value){
            start = start.next;
            mid = mid.next;
        }else{
            console.log(0);
            return 0;
        }
    }

}
