// Write your code below:
const para = document.createElement('h3');
const paraText = document.createTextNode('Buy quality organic fruits online');
para.appendChild(paraText);

const divs = document.querySelectorAll('div');
const firstDiv = divs[0];
firstDiv.appendChild(para);

const h3Tag = document.querySelector('h3');
h3Tag.style.fontStyle = 'italic';
// thired task
const secondDiv = divs[1];
const para1 = document.createElement('p');
const pText = document.createTextNode('Total fruits: 4');
para1.appendChild(pText);
const fruits = document.querySelector('.fruits');
secondDiv.insertBefore(para1, fruits);
// 4th task
para1.id = 'fruits-total';
