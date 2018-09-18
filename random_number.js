/**Math.floor() and Math.ceil() and Math.round()
  Math.floor(2.6)=>2
  Math.floor(2.2)=>2
  Math.ceil(2.2)=>3
  Math.ceil(2.6)=>3
  Math.round(2.6)=>3
  Math.round(2.2)=>2
**/

//1. Getting a random number between two values

/**This example returns a random number between the specified values. 
  The returned value is no lower than (and may possibly equal) min, and is less than (and not equal) max..
  It can include decimal numbers also**/

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
getRandomArbitrary(2,6);
getRandomArbitrary(4,9);

//2. Getting a random integer between two values

/**This example returns a random integer between the specified values. 
  The value is no lower than min (or the next integer greater than min if min isn't an integer), and is less than (but not equal to) max.
  It will be alwayes integer**/

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
getRandomInt(3,7);
getRandomInt(2,9);


//3.Getting a random integer between two values, inclusive

/**While the getRandomInt() function above is inclusive at the minimum, it's exclusive at the maximum. 
What if you need the results to be inclusive at both the minimum and the maximum? 
The getRandomIntInclusive() function below accomplishes that.**/

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
getRandomIntInclusive(3,7);
getRandomIntInclusive(2,9);

//Get a random item from an array

var items = [12, 548 , 'a' , 2 , 5478 , 'foo' , 8852, , 'Doe' , 2145 , 119];
var  randomItem = items[Math.floor(Math.random() * items.length)];
