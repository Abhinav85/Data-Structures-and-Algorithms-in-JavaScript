function mySet(){
    let collection = [];

    this.has = (elem) => (collection.indexOf(elem) !== -1)

    this.values = () => collection

    this.add = (elem) => {
        if(this.has(elem)){
            return false
        }else{
            collection.push(elem);
            return true
        }
    }


    this.remove = (elem) => {
        if(this.has(elem)){
            return false
        }else{
            index= collection.indexOf(elem);
            collection.splice(index,1);
            return true;
        }
    }

    this.length = () => collection.length

    this.union = (otherSet) => {
        let unionSet = new Set();
        let firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(e => {
            unionSet.add(e)
        })

        secondSet.forEach(e => {
            unionSet.add(e)
        })

        return unionSet;
    }

    this.intersection = (otherSet) => {
        let intersectionSet = new Set();
        let firstSet = this.values();
        firstSet.forEach(e => {
            if(otherSet.has(e)){
                intersectionSet.add(e)
            }
        })

        return intersectionSet;
    }

    this.difference = (otherSet) => {
        let differenceSet = new mySet()
        let firstSet = this.values();
        firstSet.forEach(e => {
            if(!otherSet.has(e)){
                differenceSet.add(e)
            }
        })

        return differenceSet;
    }

    this.subset = (otherSet) => {
        let firstSet = this.values();
        return firstSet.every(elem => otherSet.has(elem))
    }



}


let setA = new mySet();
let setB = new mySet();

setA.add("a");
setB.add("b")
setB.add("c")
setB.add("a")
setB.add("d")

console.log(setA.subset(setB))
