
setInterval(() => {
    const result = document.querySelector('#result');
    const currentTime = Date.now();
    const days = document.querySelector('.days');
    const hours = document.querySelector('.hours');
    const min = document.querySelector('.minute');
    const sec = document.querySelector('.second');


    const olympicTime = new Date(2028,6,14).getTime();

    let timer = olympicTime - currentTime;

    const day = Math.floor((timer)/(1000*60*60*24));
    timer %= 1000*60*60*24;

    const hour = Math.floor((timer)/(1000*60*60));
    timer %= 1000*60*60;

    const minute = Math.floor((timer)/(1000*60));
    timer %= 1000*60;

    const second = Math.floor((timer)/(1000));
    timer %= 1000;

    // result.textContent = `${day} Days : ${hour} Hours : ${minute} Minute : ${second} : Second`;
    days.textContent = `${day} Days`;
    hours.textContent = `${hour} Hours`;
    min.textContent = `${minute} Minute`;
    sec.textContent = `${second} Second`;


    
}, 1000);

