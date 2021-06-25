function Node(data, left, right){
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}

function show(){
    return this.data;
}

function BST(){
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
    this.preOrder = preOrder;
    this.postOrder = postOrder;
    this.getMaxBst = getMaxBst;
    this.getMinBst = getMinBst;
    this.find = find;
    this.minHeight = minHeight;
    this.maxHeight = maxHeight;
}

function insert(data){
    var n = new Node(data,null,null);
    if(this.root == null){
        this.root = n;
    }
    else{
        var current = this.root;
        var parent;
        while(true){
            parent = current;
            if(data < current.data){
                current = current.left;
                if(current == null){
                    parent.left = n;
                    break;
                }
            }else{
                current = current.right;
                if(current == null){
                    parent.right = n;
                    break;
                }
            }
        }
    }
}

function inOrder(node){
    if( node != null){
        inOrder(node.left);
        console.log(node.show());
        inOrder(node.right);
    }
}

function preOrder(node){
    if(node != null){
        console.log(node.show());
        preOrder(node.left);
        preOrder(node.right);
    }
}

function postOrder(node){
    if(node != null){
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.show());
    }
}

function getMinBst(){
    let current = this.root;
    while(current.left != null){
        current = current.left;
    }
    return current.data;
}

function getMaxBst(){
    let current = this.root;
    while(current.right != null){
        current = current.right;
    }
    return current.data;
}

function find(data){
    let current = this.root;
   while(current.data != data){
       if(data < current.data){
           current = current.left;
       }else{
           current = current.right;
       }

       if(current == null)
       return null;
   }

   return current.data;
}

function remove(data){
    root = removeNode(this.root,data);
}

function removeNode(node,data){
    if(node == null){
        return null;
    }
    if(data == node.data){
        if(node.left == null && node.right == null){
            return null;
        }

        if(node.left == null){
            return node.right;
        }

        if(node.right == null){
            return node.left;
        }

        var tempNode = getSmallest(node.right);
        node.data = tempNode.data;
        node.right = removeNode(node.right,tempNode.data);
    }
    else if(data < node.data){
        node.left = removeNode(node.left, data);
        return node;
    }else{
        node.right = removeNode(node.right,data);
        return node;
    }
}


function minHeight(node = this.root){
    if(node == null){
        return -1;
    }

    let left = this.minHeight(node.left);
    let right = this.minHeight(node.right);

    if(left< right){
        return left + 1
    }else{
        return right + 1
    }
}

function maxHeight(node = this.root){
    
}


function isBalanced(){
    return (this.minHeight() >= this.maxHeight() - 1)
}

var nums = new BST();
nums.insert(23);
nums.insert(2);
nums.insert(123);
nums.insert(323);
nums.insert(45);

nums.insert(12);
nums.insert(230);
nums.insert(1);
console.log(nums.minHeight())

// console.log(nums.postOrder())
// console.log(nums.find(23))
// console.log(nums.getMinBst());
// console.log(nums.getMaxBst());



module.exports = BST;

