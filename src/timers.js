const john = 'John';
const arya = 'Arya';
const sensa = 'Sensa';
const say = hero => sentence => console.log(`${hero} says : ${sentence}`);
const johnSay = say(john); // may be used this way setTimeout(johnSay, 1000, 'hello');
const aryaSay = say(arya);
const sensaSay = say(sensa);
const intervalSensa = setInterval(() => sensaSay('For the north'), 1000);
setTimeout(() => clearInterval(intervalSensa), 10000);
setTimeout(() => {
  johnSay('hello Ladies Stark');
  setImmediate(() => aryaSay('thank you for needle'));
}, 2000);
