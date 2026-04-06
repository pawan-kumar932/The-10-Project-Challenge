const body = document.querySelector('body');

body.addEventListener('click',(e)=>{
    console.log(e.clientX , e.clientY);

    const bubble = document.createElement('div');
    bubble.classList.add('clicker');

    const color = ['orange','green','red','blue','pink','purple','yellow','sky','white'];
    bubble.style.backgroundColor = color[Math.floor(Math.random()*6)];

    bubble.style.top = `${e.clientY-25}px`;
    bubble.style.left = `${e.clientX-25}px`;
    
    const textList = ['Namaste','Namaskaram','Kem Cho','HI','HEY'];
    bubble.textContent =textList[Math.floor(Math.random()*5)];

    body.append(bubble);
    

    setTimeout(()=>{
        bubble.remove();
    },4000);

})