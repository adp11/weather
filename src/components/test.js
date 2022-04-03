// TEST 1

// using normal function, still return a Promise
function promise() {
  return new Promise((resolve) => {
    resolve(3);
  });
}

function justTesting() {
  return promise().then(output => {
    return output+1;
  })
}

let test = justTesting();
console.log("expect: ", test) // promise with resolve of 4


// TEST 2
function promise() {
  return new Promise((resolve) => {
    resolve(3);
  });
}

// using async function, return a Promise
async function justTesting() {
  const a = await promise();
  console.log(a);
  return a.then((output) => output + 1); // return a promise that needs to be worked with then() later
}

const test = justTesting(); // not a value, but a promise wrapping a value => need then().
console.log('Expect:', test);


// TEST 3
function promise() {
  return new Promise((resolve) => {
    resolve(3);
  });
}

async function justTesting() {
  const a = await promise();
  console.log("//", a); // a here is a Number
  return a;
}

let result;
// value of justTesting() is a Promise with the Number-typed value above wrapped inside ==> use then() to access that number
justTesting().then(response => {
    console.log("//", typeof response);
    result = response
});
// print undefined because the block above stops temporarily and the line below is executed next (at this point, result is still undefined).
console.log('Expect:', result);

// EXAMPLE 4
async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // wait until the promise resolves (*)

  alert(result); // "done!"
}

let b = f(); // b is still Promise, but no return = promise with resolve of undefined


// EXTRA EXAMPLE (Chaining and order of execution)
// Result: 1st -> 2nd -> value works
var p2 = new Promise(function(resolve, reject) {
  resolve(1);
});

p2.then(function(value) {
  console.log(value,"1st"); // 1
  return value + 1;
}).then(function(value) {
  console.log(value + ' - A synchronous value works'); // 2 - A synchronous value works
});

p2.then(function(value) {
  console.log(value,"2nd"); // 1
});



// EXTRA EXAMPLE 
// Result: 1st console -> 3rd console -> 2nd console
Promise.resolve('foo')
  .then(function(string) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        string += 'bar';
        resolve(string);
      }, 1);
    });
  })
  .then(function(string) {
    setTimeout(function() {
      string += 'baz';
      console.log("second", string); // foobarbaz
    }, 1)
    return string;
  })
  .then(function(string) {
    console.log("...");
    console.log("third", string); // foobar
  });

/* Lessons learned from code tests:
1. Chaining async actions is necessary (=> separate getCoords() and getWeatherData() dont work)
2. return Promise.then(response => response) returns a promise with a value 'response' wrapped inside
3. asynch fn() {return 1} returns a promise with a value "1" wrapped inside; or a promise with resolve of 1.
4. Promise.then(response => {return response}): 'response' value returned is of the callback, not of .then(); .then() returns a Promise that gets resolved with 'response'
5. async dont have returns, but b is still a promise => async automatically returns a promise -> no return = no promise with resolve (there's still a promise, but just no resolve) -> undefined
6. Beware of assignments/operations that are dependent on async actions earlier.
*/ 


// justTesting().then((test) => {
//   console.log('Expect:', test);
// });

// async function aaa() {
//   const test = await justTesting();
//   console.log('Hello', test);
// }

// (async () => {
//   await aaa();
// })();

// function justTesting(input) {
//   return new Promise((resolve, reject) => {
//     resolve(input + 1);
//   });
// }

// var a = justTesting();

// justTesting(2).then(test => {
//   console.log(test);
// });
