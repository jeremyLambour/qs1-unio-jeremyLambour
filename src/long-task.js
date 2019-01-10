const heavyDo = () => {
  let count = 0;
  for (let i = 0; i < 1e8; i++) {
    if (
      Math.round(
        Math.log(Math.sqrt(Math.abs(Math.round(Math.random() * 1e10))))
      ) === 1
    )
      count++;
  }
  return count;
};

let interval = setInterval(() => console.log('I am blocked'), 1000);
console.log(heavyDo()); // take almost 10 seconds

setTimeout(() => clearInterval(interval), 10000);
