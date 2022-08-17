class LinkedList {
    constructor() {
        // if the head is `null` it means
        // the linked list is empty
        this.head = null;
    }

    push(newNode) {
        // if the linked list empty
        // i.e this.head is `null`
        if (this.head == null) {
            this.head = newNode;
        } else {
            let current = this.head;
            // move `current` until it gets to last node in the list
            while (current.getNext() != null) {
                current = current.getNext();
            }
            // when the loop finished, `current` will be referring to the last node in the list
            current.next = newNode;
        }
    }

    print() {
        let current = this.head;
        while(current != null) {
            console.log(current.getValue());
            current = current.getNext();
        }
    }
}

module.exports = LinkedList;