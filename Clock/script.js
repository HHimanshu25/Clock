

function update(){
    let today = new Date()
    let hour = today.getHours()
    let min = today.getMinutes()
    let sec = today.getSeconds()
    if(10>hour>0){hour='0'+hour;}
    if(10>min>0){min='0'+min}
    if(10>sec>0){sec='0'+sec}
    document.querySelector('.hour').innerHTML=hour
    document.querySelector('.min').innerHTML=min
    document.querySelector('.sec').innerHTML=sec
}

setInterval(update, 1000);
update();