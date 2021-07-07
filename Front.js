// FRONTS

// creates node class to reference/instantiate in SLL class
class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class SLL {
    constructor(){
        // creates empty list, the head of the list is null by default
        this.head = null
    }

    // Add Front
    // Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.

    addFront(value) {
        // instantiate a new node using our class
        let newNode = new Node(value)
        // our new node's next will be the current head of the list
        newNode.next = this.head
        // change the head of the list to the new node
        this.head = newNode
        return this.head
    }

    // Remove Front
    // Write a method to remove the head node and return the new list head node. If the list is empty, return null.

    removeFront(){
        // check to see if there's an object stored at this.head
        if (this.head){
            // if so, set it equal to the next object's head in the list, removing the first object from the list
            this.head = this.next
        }
        // return the new object held at head
        return this.head
    }

    // Front
    // Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.

    front(){
        // checks for object stored at this.head
        if(this.head){
            // if so, returns the value held for that object
            return this.head.value
        }

        // if the ^ condition isn't met, that means the list is empty. We return null
        return null
    }

    // Contains
    // Add a method contains(value) to your SLL class, which is given a value as a parameter.  Return a boolean (true/false); true, if the list possesses a node that contains the provided value.

    contains(value){
        // create a variable that checks the object at the front of the list. If there is a head, check becomes that object. If not, check == null
        let check = this.head

        // this loop will continue as long as there is a value in this.head — if check == null, we exit this loop
        while(check){

            // while iterating over the objects in this list, if at any point our check value == the value we're looking for, return true and exit the function
            if(check.value == value){
                return true
            }

            // if not, change the value of check (this.head) to check.next
            check = check.next
        }

        // if we exit the while loop and still haven't found the value we're looking for, return false
        return false
    }

    // Length
    // Create a new SLL method length() that returns number of nodes in that list.

    length(){
        // create two variables, counter variable and set our runner to the head of our SLL
        let count = 0
        let runner = this.head

        // while runner(this.head) != null, enter this loop
        while (runner){

            // increment our count variable, and set runner(this.head) to runner.next
            count += 1
            runner = runner.next
        }

        // after we exit the loop, return our counter variable
        return count
    }

    // Display
    // Create display() that returns a string containing all list values. Build what you wish console.log(myList) did!

    display(){

        // create two variables, one an empty string to concatenate the values stored in our SLL, the other our runner to navigate through the list
        let nodeValues = ""
        let runner = this.head

        // while runner != null
        while(runner){

            // check to see if runner.next != null
            if(runner.next){

                // if there is a next value in the SLL, concatenate the value at runner and a "," and a "(space)"
                nodeValues += runner.value + ", "

                // if not, that means the current object is the last in the list
            } else {

                // so we concatenate the runner value and a period.
                nodeValues += runner.value + "."
            }

            // change the runner variable to the next object in the list
            runner = runner.next
        }

        // return our sentence at the end
        return nodeValues
    }

    // SList: Max
    // Create method max() to return list’s largest val.

    FindMaximum(){

        // create two variables, our runner and a variable to keep track of the largest value in the list. We'll start with the value at this.head (this is the same as saying max = list[0])
        let runner = this.head
        let maximumVal = runner.value

        // while runner != null
        while(runner){

            // check if the value at where runner is currently is larger than the value stored in maxVal
            if (runner.value > maximumVal){

                // if so, update maxVal
                maximumVal = runner.value
            }

            // move runner down the list
            runner = runner.next
        }

        // return the variable 
        return maximumVal
    }

    // SList: Min
    // Create min(node) to return list’s smallest val.

    FindMinimum(){ //same as maximum

        let runner = this.head
        let minimumVal = runner.value

        while(runner){
            if (runner.value < minimumVal){
                minimumVal = runner.value
            }
            runner = runner.next
        }
        return minimumVal
    }


    FindAverage(){

        // create total variable to keep track of the amount of each value in our list added together, and our runner variable to move through the list
        let sum = 0
        let runner = this.head

        // while runner != null
        while(runner){

            // add the value at runner to our total variable
            sum += runner.value

            // set runner to the next object in the list
            runner = runner.next
        }

        // return total divided by the length of this(our list). We can do this with dot notation and the length function we wrote above
        return sum/this.length()
    }
}

