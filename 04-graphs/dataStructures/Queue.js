const LinkedList = require('./LinkedList');
const Node = require('./Node');

// Queue: only those actions are allowed;
// add to the back -- enqueue()
// remove from the front -- dequeue()
// see what's on the front -- peek()

class Queue {
    constructor() {
        this.data = new LinkedList();
    }
    // assume the newData is a value, like integer, float or etc.
    enqueue(newData) {
        this.data.push(new Node(newData));
    }
    dequeue() {
        // retrieve what is at the front of the linked list
        const front = this.data.getAt(0);
        // delete the front of the linked list
        this.data.deleteAt(0);
        return front.getValue(); // try to hide the inner workings of a data structure
    }
    // peek() {
    //     let front = this.data.getAt(0)
    //     if ( front) {
    //         return front.getValue();
    //     } else {
    //         return null
    //     }
    // }
    peek() {
        // optional chaining
        return this.data.getAt(0)?.getValue();
    }
}

module.exports = Queue;