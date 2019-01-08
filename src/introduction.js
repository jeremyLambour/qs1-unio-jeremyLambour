const bar = cb => {
  console.log('first');
  return setImmediate(cb);
};

bar(() => console.log('second'));
console.log('third');
