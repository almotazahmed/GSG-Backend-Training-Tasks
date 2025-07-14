//---------------------------------------------------------------------------------------------------------------------------//
// This is the simple generator function example that yields values one by one with star * in declaration. 
function* generateChars () {
  // Yield keywords are used to pause the function execution and return a value.
  // every time we call next() method on the iterator object that is returned by the generator function,
  // it will resume the function execution from the last yield statement and return the value of yield.
  yield 'a';
  yield 'b';
  yield 'c';
}

let charGenerator = generateChars();
console.log(charGenerator.next()); // Output: { value: 'a', done: false }
console.log(charGenerator.next()); // Output: { value: 'b', done: false }
console.log(charGenerator.next()); // Output: { value: 'c', done: false }
console.log(charGenerator.next()); // Output: { value: undefined, done: true } (no more values to yield),
// the end of the generator function execution.
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// generator function with return statement example.
function* generateChars () {
  // Pauses and Produces Values
  yield 'a';
  // Pauses and Produces Values
  yield 'b';
  // Terminates the Generator and returns a final value
  return 'done';
  // This line will not be executed because the generator is terminated.
  yield 'c';
}

let charGenerator2 = generateChars();
console.log(charGenerator2.next()); // Output: { value: 'a', done: false }
console.log(charGenerator2.next()); // Output: { value: 'b', done: false
console.log(charGenerator2.next()); // Output: { value: 'done', done: true } (generator is terminated)
console.log(charGenerator2.next()); // Output: { value: undefined, done: true } (no more values to yield), the end of the generator function execution.

let charGenerator3 = generateChars();
for (let char of charGenerator3) {
  console.log(char); // Output: a, b. while done and c will not be printed because the generator is terminated.
}
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// This is the iterable protocol implementation example using generator function.
let myIterableObject = {
  names: [ 'Motaz', 'Bellal', 'yakoub' ],
  // this is the method that makes this object iterable starts with star * to indicate it's a generator function.
  *[ Symbol.iterator ] () {
    let names = this.names;
    let index = 0;
    // This is the generator function that yields values one by one.
    while (index < names.length)
    {
      // yield returns the next value in the array and pauses the function execution.
      yield names[index++];
    }
  }
};

let generatorIterator = myIterableObject[ Symbol.iterator ]();
console.log(generatorIterator.next()); // Output: { value: 'Motaz', done: false
console.log(generatorIterator.next()); // Output: { value: 'Bellal', done: false }
console.log(generatorIterator.next()); // Output: { value: 'yakoub', done: false
console.log(generatorIterator.next()); // Output: { done: true } (no more values to yield)
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// This is the generator function that generates unique IDs starting from 1.
function* idGenerator () {
  let id = 1;
  while (true) {
    // This will yield an id and pause the function execution.
    yield id++;
  }
}

let idGen = idGenerator();
console.log(idGen.next()); // Output: { value: 1, done: false }
console.log(idGen.next()); // Output: { value: 2, done: false }
console.log(idGen.return(2)); // Output: { value: 2, done: true } (generator is terminated with return)
console.log(idGen.next()); // Output: { value: undefined, done: true } (no more values to yield)
//---------------------------------------------------------------------------------------------------------------------------//