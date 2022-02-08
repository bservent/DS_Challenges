/* QUEUE */

/* like a queue in a line --first in first out */
/* you can implement a queue with an array */
/* functions: enqueue, push,  dequeue, shift, front, size, isEmpty */

/* Queue using an array */

/* function Queue() {
  collection = [];
  this.print = function() {
    console.log(collection);
  };

  this.enqueue = function(element) {
    collection.push(element);
  }
  this.dequeue = function() {
    return collection.shift();
  };
  this.front = function() {
    return collection[0];
  };
  this.size = function() {
    return collection.length;
  }
  this.isEmpty = function() {
    return (collection.length === 0);
  };
}

var q = new Queue();

console.log(q.isEmpty());
q.enqueue('1');
q.enqueue('2');
q.enqueue('3');
q.enqueue('4');
q.enqueue('5');
q.print();
console.log(q.front());
q.dequeue();
q.dequeue();
q.dequeue();
q.print();
console.log(q.size());
q.dequeue();
q.dequeue(); */

/*Priority Queue
--this queue takes in two args: element, priority 
--elements with higher priorities are sent to beginning of queue */

/* function PriorityQueue() {
  var collection = [];
  this.printCollection = function() {
    (console.log(collection));
  };
  this.enqueue = function(element) {
    if(this.isEmpty()){
      collection.push(element);
    }else{
      let added = false;
      for (var i=0; i<collection.length;i++){
        if(element[1] < collection[i][1]){
          collection.splice(i,0,element);
          added = true;
          break;
        }
      }
      if(!added){
        collection.push(element);
      }
    }
  };
  this.dequeue = function() {
    var value = collection.shift();
    return value[0];
  };
  this.front = function() {
    return collection[0];
  };
  this.size = function() {
    return collection.length;
  }
  this.isEmpty = function() {
    return (collection.length === 0);
  };
}

var pq = new PriorityQueue();

pq.enqueue('apple', 5);
pq.enqueue('rawww', 3);
pq.enqueue('meow', 7);
pq.printCollection(); */