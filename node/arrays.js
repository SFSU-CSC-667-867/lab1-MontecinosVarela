// Arrays in js

// arrays can be delared explicitly
const array = [9, 3, 4];

// or with new keyword
const anotherArray = new Array(5);

// access array elements
console.log(array[0]);

// change elements
array[1] = 'hello';

// for practice

// use forEach
array.forEach(function(item, index, array) {
    console.log(item, index);
});

// use map
array[1] = 3;
const map = array.map(x => x * 2);
console.log(map);

// use pop
console.log('Array before being popped: ' + array);
array.pop();
console.log('Array after being popped: ' + array);

// use push
array.push('justPushed');
console.log(array);

// use shift
array.shift();
console.log('Shifted: ' + array);

// use unshift
array.unshift(9);
console.log(array);

// use filter
const result = array.filter(value => value > 5);
console.log(result);