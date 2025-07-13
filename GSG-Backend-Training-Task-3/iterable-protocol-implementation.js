// Iterable Protocol Implementation

let myIterableObject = {
  //This is an array object that we want to make iterable
  names: [ 'Motaz', 'Bellal', 'yakoub' ],
  //This is the interface that make this object iterable provided by es6 by implementing the iterable protocol
  // and which called when we use the for..of loop, spread operator or destructuring assignment. 
  [ Symbol.iterator ] () {
    //This is the index that will be used to iterate over the array and it's initialized to 0 to start from the first of the array.
    let index = 0;
    //names variable references the names array from the object.
    let names = this.names;
    //this is the iterator object that will be returned by the iterator protocol.
    return {
      //this method is called by many js features that use the iterable protocol.
      next () {
        // condition to check if wee arrived to the end of the array or not.
        if (index < names.length)
        {
          // if not, we return the next value in the array and increment the index.
          return {value: names[ index++ ], done: false}; 
        }
        else
        {
          //if we arrived the end we return done with true, that means we finished the iteration.
          return {done: true};
        }
      }
    }
  }
};


// for ... of loop iteration example
for (let name of myIterableObject) {
  console.log(name); // Output: Motaz, Bellal, yakoub
}

//Manually using the iterator by initializing new object from the iterable object.
let iterator = myIterableObject[ Symbol.iterator ](); 
console.log(iterator.next()); // Output: { value: 'Motaz', done: false }
console.log(iterator.next()); // Output: { value: 'Bellal', done: false }   
console.log(iterator.next()); // Output: { value: 'yakoub', done: false }
console.log(iterator.next()); // Output: { done: true }
console.log(typeof iterator.next()); // Output: 'object'
  

// no errors, just the end of the iteration.
console.log(iterator.next()); // Output: { done: true } (no more values to iterate)


// example of different data structures that support the iterable protocol
let myName = "Motaz";
let myNameIterator = myName[ Symbol.iterator ]();
console.log(myNameIterator.next()); // Output: { value: 'M', done: false }
console.log(myNameIterator.next()); // Output: { value: 'o', done: false }


let myMap = new Map([[ "name", "motaz" ], [ "age", 23 ]]);
let myMapIterator = myMap[ Symbol.iterator ]();
console.log(myMapIterator.next()); // Output: { value: [ 'name', 'motaz' ], done: false }
console.log(myMapIterator.next()); // Output: { value: [ 'age', 23 ], done: false }


