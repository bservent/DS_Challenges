/* STACKS
-ex. stack of books
-ex. browsers back button functionality
-first in first out data flow
-functions used are pop(), push(), peek(display top element of stack), length
- arrays can be used as stacks
-  */

/* Reverse Word using Array Stack */

/* var letters = [];
var rword = '';

function isPalidrome(word) {
  for(let i = 0; i < word.length; i++) {
    letters.push(word[i]);
  }
  for(let i = 0; i < word.length; i++) {
    rword += letters.pop();
  }
  if(rword === word){
    return (word + " is a palidrome");
  }else{
    return (word + " is not a palidrome");
  }
}

isPalidrome('sldkjfsdj'); 

one liner = word.split('').reverse().join(''); and then check for equality*/

/* Create a Stack */

/* var Stack = function() {
  this.count = 0;
  this.storage = {};

  //adds a value onto the end of the stack
  this.push = function(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  //removes a value from end of stack
  this.pop = function() {
    if (this.count === 0) {
      return "stack is empty"
    }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  this.size = function() {
    return this.count;
  }
  
  //return the value at end of stack
  this.peek = function() {
    return this.storage[this.count-1];
  }
}

var myStack = new Stack();

myStack.push(3);
myStack.push(4);
myStack.push(88);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.pop());
 */