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