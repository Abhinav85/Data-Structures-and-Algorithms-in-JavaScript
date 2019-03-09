function Node(element){
    this.element = element;
    this.next = null;
}

function LinkedList(){  
    this.head = null;
}

LinkedList.prototype.insert = function(val){
    var node = {
       value: val,
       next: null
    }
    if(!this.head){
      this.head = node;      
    }
    else{
      current = this.head;
      while(current.next){
        current = current.next;
      }
      current.next = node;
    }
}

LinkedList.prototype.display = function(){
    var list = this.head;
    console.log(list.value)
    while(list.next !== null){
        list = list.next;
        console.log(list.value);
       
    }
}

LinkedList.prototype.remove = function(val){
    var current = this.head;
    //case-1
    if(current.value == val){
       this.head = current.next;     
    }
    else{
      var previous = current;
      
      while(current.next){
        //case-3
        if(current.value == val){
          previous.next = current.next;          
          break;
        }
        previous = current;
        current = current.next;
      }
      //case -2
      if(current.value == val){
        previous.next == null;
      }
    }
}

LinkedList


module.exports = {LinkedList, Node};
