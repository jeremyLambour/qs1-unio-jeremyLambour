const john = 'John';
const arya = 'Arya';
const sensa = 'Sensa';
const say = hero => sentence => Promise.resolve(`${hero} says : ${sentence}`);
const johnSay = say(john);
const aryaSay = say(arya);
const sensaSay = say(sensa);

let isJohnAlreadySpoke = false;
const intervalsensa = setInterval(() => {
  sensaSay('For the North').then(value => {
    console.log(value);
    aryaSay('The king in the North').then(value => {
      console.log(value);
    }),
      johnSay('Winter is coming').then(value => {
        if (!isJohnAlreadySpoke) {
          console.log(value);
          isJohnAlreadySpoke = !isJohnAlreadySpoke;
        }
      });
  });
}, 1000);

setTimeout(() => clearInterval(intervalsensa), 10000);
