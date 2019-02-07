process.nextTick(() => console.log('Hello'));
setImmediate(() => console.log('Now'));
process.nextTick(() => console.log('there'));

console.log('world');