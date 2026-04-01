
setInterval(()=>{
    const child= document.querySelector('#child');
    const time = new Date();
    child.textContent = time.toLocaleTimeString();

},1000)
