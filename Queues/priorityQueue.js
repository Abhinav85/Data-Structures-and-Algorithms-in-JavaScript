function priorityQueue(){
    let dataStore = [];
    this.enqueue = (elem) => {
        if(this.empty){
            dataStore.add(elem)
        }else{
            let added = false
            for(i = 0; i < dataStore.length; i++){
                if(elem[1] > dataStore[i][1]){
                    dataStore.splice(i,0,elem)
                }
                added = true;
                break;
            }
        }

        if(!added){
            dataStore.push(elem)
        }
    }


    this.dequeue = function dequeue(){
        return this.dataStore.shift(); // Remove first item of the array
    }

    this.front = function front(){
        return this.dataStore[0];
    }

    this.back = function back(){
        return this.dataStore[this.dataStore.length -1]
    }

    this.empty = function empty(){
        if(this.dataStore.length == 0){
            return true;
        }else
        {
            return false;
        }
    }

    this.toString = function toString(){
        return this.dataStore.toString();
    }
}