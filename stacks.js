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