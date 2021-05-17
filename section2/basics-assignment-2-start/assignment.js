const task3Element = document.getElementById('task-3');

function firstFunction() {
    alert('First function alert message.');
}

function greetUser(name) {
    alert('Hi ' + name);
}

function combineText(string1, string2, string3) {
    return (string1 + " " + string2 + " " + string3);
}

greetUser('Josh');

task3Element.addEventListener('click', firstFunction);

const result = combineText('My name is', 'Josh', 'and I like tennis.');
alert(result);