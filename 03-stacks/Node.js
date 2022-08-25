// a Node needs to have
// - the data that it is supposed to store
// - a reference (aka pointer) to its neighbour
class Node {
    constructor(value, next=null) {
        this.value = value;
        this.next = next;
    }

    // interface of the class is basically
    // how other code can make use of the class (basically the functionalities)
    setValue(value) {
        this.value = value;
    }
    getValue(){
        return this.value;
    }

    getNext() {
        return this.next;
    }

    // the `next` argument is supposed to be a Node or `null` (no node)
    setNext(next) {
        this.next = next;
    }
}
module.exports = Node;