class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}
class SLL {
    constructor() {
        this.head = null;
    }
    display() {
        //neatly display nodes in my list
        var runner = this.head;
        var string = "";
        while(runner) {
            string += runner.value + " "
            runner = runner.next;
        }
        return string;

    }
}
