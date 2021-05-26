const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if(randomNumber > .7) {
    console.log(randomNumber);
    alert('Random Number is greater than .7');
}

const numArray = [1, 2, 3, 4, 5];
for(let i = 0; i < numArray.length; i++) {
    console.log('For Loop Iteration:', numArray[i]);
}

for(let num of numArray) {
    console.log('Enhanced For Loop Iteration: ', num);
}

for(let i = numArray.length - 1; i >= 0; i--) {
    console.log('Backwards For Loop Iteration:', numArray[i]);
}

const randomNumber2 = Math.random();

if((randomNumber > .7 && randomNumber2 > .7) || randomNumber <= .2 || randomNumber2 <= .2) {
    console.log('Random Number 1: ', randomNumber, 'Random Number 2: ', randomNumber2);
    alert('Random Number Test 2');
}