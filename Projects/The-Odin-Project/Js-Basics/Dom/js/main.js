const container = document.querySelector('#container');
const selectDiv = document.querySelector('#select')

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const paragraph = document.createElement('p');
paragraph.textContent = 'Hey i\'m Red!';
paragraph.style.cssText = 'color:red;'

const domH3 = document.createElement('h3');
domH3.textContent = 'I\'m a blue h3';
domH3.style.cssText = 'color: blue;'

const div = document.createElement('div');
div.classList.add('select');
div.style.cssText = 'border:1px solid black; background-color:pink;';

const domH1 = document.createElement('h1');
domH1.textContent='I\'m in a div';

const domP = document.createElement('p');
domP.textContent = 'ME TOO!';

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});

div.appendChild(domH1);
div.appendChild(domP);

container.appendChild(content);
container.appendChild(paragraph);
container.appendChild(domH3);
container.appendChild(div);
