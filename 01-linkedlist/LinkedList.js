class LinkedList {
    constructor() {
        // if the head is `null` it means
        // the linked list is empty
        this.head = null;
        this.tail = null;
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

    insertAt(index, newNode) {
        if (this.head == null) {
            return;
        } else {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current.getNext();
            }
            newNode.setNext( current.getNext())
            current.setNext( newNode);
        }
    }

    deleteAt(index) {
        if (this.head==null) {
            return;
        }
        if (index == 0) {
            this.head = this.head.getNext();

            // no need to explictly delete the old head
            // because there's no variables referring to it
            // therefore it will be deleted automatically
            // i.e, garbage collection

        } else {
            // move current so that it is just one node
            // before the one to be deleted
            let current = this.head;
            for (let i =0; i < index -1; i++) {
                current = current.getNext();
            }
            // current should refer to one node before the one
            // to be deleted (aka `D`)

            // the next of Before should the next of D
            const toBeDeleted = current.getNext();
            current.setNext(toBeDeleted.getNext())

        }
    }
    getAt(index) {
        let current = head;
        for (let i = 0; i < index; i++) {
            current = current.getNext();
        }
        return current;
    }
}

module.exports = LinkedList;