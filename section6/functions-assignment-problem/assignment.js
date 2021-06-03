let sayHello = (name = 'Josh') => console.log('Hi ' + name);
let sayCustomGreeting = (greeting = 'Hi', name = 'Josh') => console.log(greeting + ", " + name);
let sayHey = () => console.log('Hey there');
let getReturnedGreeting = (greeting = 'Hi', name = 'Josh') => { return `${greeting}, ${name}`; }

sayHello();
sayCustomGreeting();
sayCustomGreeting('Hey', 'Bob');
sayHey();
console.log(getReturnedGreeting('Yo', 'Dude'));

function checkInput(cb, ...strings) {
  let hasEmptyText = false;
  for(const text of strings) {
    if(!text) {
      hasEmptyText = true;
      break;
    }
  }
  if(!hasEmptyText) {
    cb();
  }
}

checkInput(() => {
  console.log('All not empty!');
}, 'Hello', '12', 'adsfa', '');