// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:

// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// The functions get and put must each run in O(1) average time complexity.




/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
    this.capacity = capacity;
     this.hMap = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.hMap.has(key)){
        let val = this.hMap.get(key);
        this.hMap.delete(key);
        this.hMap.set(key,val);
        return val
    }else{
        return -1
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.get(key) === -1){
         if(this.hMap.size === this.capacity){
              for(let [keyVal] of this.hMap){
                this.hMap.delete(keyVal);
                break;
            }
        }
    }
    this.hMap.set(key,value)

   
};



/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */



// Linkedlists are also used to store the order
// You used a double linked list, and you start with head
// that is the top of irder and the tail is just the Pointer
// to end 
// In the hashmap you store the node in every entry 
// So when you add you do a head.next, and the .next that was
// before it is used to point to the earlier one

// If we add a new one that already exists, we find it in
// hashmap., delete that node, and then add a new node
// which is added on the top


