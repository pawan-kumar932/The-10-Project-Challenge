const form = document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const Boy = document.getElementById('boy');
    const Girl = document.getElementById('girl');
    l1 = Boy.value.length;
    l2 = Girl.value.length;
    console.log(l1,l2);

    const res = Math.pow(l1+l2,3)%101;
    document.getElementById('result');
    if(res < 13){
        result.textContent = `Result:${res}% Try Again`;
    }
    else if(res > 80){
        result.textContent = `Result:${res}% Perfect Match`;
    }
    else{
        result.textContent = `Result:${res}%`;
    }
    
    form.reset();


})