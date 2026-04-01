const parent = document.getElementById('parent');
const body = document.querySelector('body');
const content = document.querySelector('h2');
parent.addEventListener('click',(e)=> {
    const child = (e.target).id;
    body.style.backgroundColor = child;
    content.style.color = child;


})