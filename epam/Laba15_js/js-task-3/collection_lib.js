function Node(value) {
    this.data = value;
    this.previous = null;
    this.next = null;
}

class Collection {
    constructor() {
        this.head = null;
        this.tail = null;
        this._length = 0;
    }
    get size() {
        return this._length;
    }
    get isEmpty() {
        return !this._length;
    }
    clear() {
        this.head = null;
        this.tail = null;
        this._length = 0;
    }
    add(value) {
        let node = new Node(value);

        if (this._length) {
            this.tail.next = node;
            node.previous = this.tail;
            this.tail = node;
        } else {
            this.head = node;
            this.tail = node;
        }
        this._length++;
    }
    remove(value) {
        if (!this._length) {
            return;
        }
        let current = this.head;
        if (this.head.data == value) {
            this.head = current.next;

            if (this.head) {
                this.head.previous = null;
            } else {
                this.tail = null;
            }
        } else if (this.tail.data == value) {
            this.tail = this.tail.previous;
            this.tail.next = null;
        } else {
            let previousNodeToDelete = null;
            let nextNodeToDelete = null;
            while (current) {
                if (current.data == value) {
                    previousNodeToDelete = current.previous;
                    nextNodeToDelete = current.next;
                    previousNodeToDelete.next = nextNodeToDelete;
                    nextNodeToDelete.previous = previousNodeToDelete;
                    current = null;
                    break;
                }
                current = current.next;
            }
        }
        this._length--;
        return;
    }
    contains(value) {
        if (!this._length) {
            return false;
        }
        let current = this.head;
        while (current) {
            if (current.data == value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }
};

class Queue extends Collection {
    constructor() {
        super();
    }
    get first() {
        return this.head.data;
    }
    get last() {
        return this.tail.data;
    }
    remove() {
        if (!this._length) {
            return;
        }
        let deleted = this.head.data;
        this.head = this.head.next;
        if (this.head) {
            this.head.previous = null;
        } else {
            this.tail = null;
        }
        this._length--;
        return deleted;
    }
};


class FixedArray extends Collection {
    constructor(length) {
        super();
        if (length > -1 && typeof length == 'number') {
            this._length = Math.floor(length);
        }
        this.fill();
    }
    fill() {
        let current;
        for (let i = 0; i < this._length; i++) {
            let node = new Node(null);
            if (i == 0) {
                this.head = node;
                this.tail = node;
            } else if (i == 1) {
                this.head.next = node;
                this.tail = node;
                this.tail.previous = this.head;
                current = this.tail;
            } else if (i == this._length - 1) {
                this.tail.next = node;
                node.previous = this.tail;
                this.tail = node;
            } else {
                node.previous = current;
                current.previous.next = node;
                current = node;
            }
        }
    }
    insertAt(index, item) {
        if (index < 0 || index > this._length - 1) {
            throw new RangeError("Failure: out of range. ");
        }
        let node = new Node(item);
        if (index == 0) {
            if (this._length) {
                this.head.previous = node;
                node.next = this.head;
                this.head = node;
            } else {
                this.head = node;
                this.tail = node;
            }
        } else if (index == this._length - 1) {
            this.tail.next = node;
            node.previous = this.tail;
            this.tail = node;
        } else {
            let current = this.head;
            counter = 0;
            while (current) {
                if (counter == index) {
                    if (current.next) {
                        current.next.previous = node;
                    }
                    current.previous.next = node;
                    node.next = current.next;
                    node.previous = current.previous;
                }
                counter++;
                current = current.next;
            }
        }
    }
    getAt(index) {
        if (!this._length || index < 0 || index > this._length - 1) {
            throw new RangeError("Failure: out of range. ");
        }
        if (index == 0) {
            return this.head.data;
        } else if (index == this._length - 1) {
            return this.tail.data;
        } else {
            let current = this.head;
            let counter = 0;
            while(current) {
                if(counter == index){
                    return current.data;
                }
                counter++;
                current = current.next;
            }
        }
        return null;
    }
};

class Set extends Collection{
    constructor(){
        super();
    }
    add(item){
        if(this._length){
            let current = this.head;
            while(current){
                if(current.data == item){
                    return true;
                }
                current = current.next;
            }
        }
        let node = new Node(item);

        if (this._length) {
            this.tail.next = node;
            node.previous = this.tail;
            this.tail = node;
        } else {
            this.head = node;
            this.tail = node;
        }
        this._length++;
    }
    intersect(set) {
        if(!set instanceof Collection){
            return;
        }
        let plural = new Set();
        let current = this.head;
        while(current){
            plural.add(current.data);
            current = current.next;
        }
        current = set.head;
        while(current) {
            if(!plural.contains(current.data)){
                plural.remove(current.data);
            }
            current = current.next;
        }
        return plural;
    }
    union(set) {
        if(!set instanceof Collection){
            return;
        }
        let plural = new Set();
        let current = this.head;
        while(current){
            plural.add(current.data);
            current = current.next;
        }
        current = set.head;
        while(current) {
            plural.add(current.data);
            current = current.next;
        }
        return plural;
    }
};