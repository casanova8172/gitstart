// Write the code as shown in the video below:
const mainHeading = document.querySelector('#main-heading');
mainHeading.style.textAlign = 'center';

const fruits = document.querySelector('.fruits');
fruits.style.backgroundColor = 'gray';
fruits.style.padding = '30px';
fruits.style.margin = '30px';
fruits.style.width = '50%';
fruits.style.bordrRadius = '5px';
fruits.style.listStyleType = 'none';

const basketHeading = document.querySelector('h2');
basketHeading.style.marginLeft = '30px';
basketHeading.style.color = 'brown';

const listItem = document.querySelector('li:nth-child(2)');
listItem.style.backgroundColor = 'brown';
listItem.style.color = 'white';

const forthItem = document.querySelector('li:nth-child(4)');
forthItem.style.backgroundColor = 'brown';
forthItem.style.color = 'white';

// Write answer to the questions asked below:

const fruitsItem = document.querySelectorAll('.fruit');
for (let i = 0; i < fruitsItem.length; i++){
    fruitsItem[i].style.backgroundColor = 'brown';
    fruitsItem[i].style.padding = '10px';
    fruitsItem[i].style.margin = '10px';
    fruitsItem[i].style.bordrRadius = '5px';
}

const oddFruitItem = document.querySelectorAll('.fruit:nth-child(odd)');
for (let i = 0; i < oddFruitItem.length; i++){
    oddFruitItem[i].style.backgroundColor = 'lightgray';
}
