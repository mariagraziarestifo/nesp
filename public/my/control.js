lest from= document.getElementById('login');
lest psw=document.getElementById ('psw');
form.onsubmit=() => {
    if ((psw.value.length >=8 )) {
        return true
    } else{
        console.log (' Incorrect Password ')
        return false;
    }
};