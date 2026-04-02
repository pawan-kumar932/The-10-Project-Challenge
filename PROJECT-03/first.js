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
    if (res < 30) {
    // Kam score ke liye
    result.textContent = `Result: ${res}% - Keep looking!`;
    // result.style.color = "red"; 
} 
    else if (res > 80) {
    // High score ke liye
    result.textContent = `Result: ${res}% - Perfect Match! `;
    // result.style.color = "green";
} 
    else {
    // Average score ke liye
    result.textContent = `Result: ${res}% - There's a spark!`;
    // result.style.color = "orange";
}
    
    form.reset();


})