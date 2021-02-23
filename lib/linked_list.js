// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// Prompt: Implement a Singly Linked List and all of its methods below
// 
// ============================================================================


class Node {
    constructor(val) {
        this.value = val; 
        this.next = null;
    }

}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToTail(val) {
        let oldTail = this.tail; 
        let newTail = new Node(val);

        if (oldTail) oldTail.next = newTail; 
        if (!this.head) this.head = newTail;
        this.tail = newTail;

        this.length++;
        return this;
    }

    removeTail() {
        let oldTail = this.tail; 
        if (!oldTail) return undefined;

        if (this.length <= 1) {
            [ this.head, this.tail ] = [ null, null ]
        } else {
            let newTail = this.get(this.length - 2);
            newTail.next = null;
            this.tail = newTail; 
        }

        this.length--;
        return oldTail; 
    }

    addToHead(val) {
        let newHead = new Node(val);
        let oldHead = this.head; 
        this.head = newHead;

        if (!oldHead) {
            this.tail = newHead;
        } else {
            newHead.next = oldHead; 
        }

        this.length++; 
        return this;
    }

    removeHead() {
        if (!this.head) return undefined; 

        let oldHead = this.head; 
        let newHead = this.head.next;
        if (newHead) {
            this.head = newHead;
        } else {
            [this.head, this.tail] = [null, null];
        }

        this.length--;
        return oldHead;
    }

    contains(target) {
        let node = this.head; 
        while (node) {
            if (node.value === target) return true;
            node = node.next;
        }

        return false;
    }

    get(index) {
        if (index >= this.length) return null;
        let k = 0;
        let node = this.head; 
        while (k < index) {
            node = node.next;
            k++;  
        }

        return node;
    }

    set(index, val) {
        let node = this.get(index);
        if (!node) return false;
        node.value = val; 

        return true; 
    }

    insert(index, val) {
        if (index >= this.length) return false;

        let prevNodeAtIdx = this.get(index-1);
        if (!prevNodeAtIdx) {
            this.addToHead(val);
            return true;
        } 
        let nextNodeAtIdx = prevNodeAtIdx.next;
        let newNode = new Node(val);

        prevNodeAtIdx.next = newNode;
        newNode.next = nextNodeAtIdx;

        this.length++;
        return true;
    }

    remove(index) {
        if (index >= this.length) return undefined;

        let nodeBeforeRm = this.get(index-1);
        if (!nodeBeforeRm) return null;
        let nodeToRemove = nodeBeforeRm.next;
        let nodeAfterRm = nodeToRemove.next; 
        nodeBeforeRm.next = nodeAfterRm;

        this.length--;
        return nodeToRemove;
    }

    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
