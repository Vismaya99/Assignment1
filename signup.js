let first=document.getElementById('first');
let pwd=document.getElementById('pwd');
let email=document.getElementById('email');
let error=document.getElementById('error');
let num=document.getElementById('num');
let poor=document.getElementById('poor');
let medium=document.getElementById('medium');
let strong=document.getElementById('strong');
let pwd2=document.getElementById('pwd2');
let phone=document.getElementById('phone');
let mailerror=document.getElementById('mailerror');
let pherror=document.getElementById('pherror');
let passerror=document.getElementById('passerror');




function validate(){
    if(first.value.trim()==""){
        first.style.border='2px solid red';
        alert('first name is empty');
        return false;
    }
    else{
        first.style.border='2px solid green';
    }
    
     if(pwd.value.trim()==""){
        pwd.style.border='2px solid red';
        alert('password field is empty');
        return false;
    } 
    
    
     if(email.value.trim()==""){
        email.style.border='2px solid red';
        alert('email field is empty');
        return false;
    }
    if(pwd2.value.trim()==""){
        pwd2.style.border='2px solid red';
        alert('confirm password field is empty');
        return false;
    }
    if(phone.value.trim()==""){
        phone.style.border='2px solid red';
        alert('phone field is empty');
        return false;
    }

 
    else{
        first.style.border='2px solid green';
        pwd.style.border='2px solid green';
        email.style.border='2px solid green';
        pwd2.style.border='2px solid green';
        phone.style.border='2px solid green';

        // error.style.color='white';
        return true; 
    }
    
}

    function number(){
         if(pwd.value.match(/[0-9]/)){
            num.style.color='white';
            pwd.style.border='2px solid green';
            medium.style.width='90%';
            poor.style.width='10%';
            strong.style.width='10%';
            medium.innerHTML='medium';
        
        }
        else{
            pwd.style.border='2px solid red';
            num.style.color='red';
            num.innerHTML='*should contain atleast one number';
            poor.style.width='90%';
        medium.style.width='10%';
        strong.style.width='10%';
        poor.innerHTML='poor';
            return false;
        }
        if(pwd.value.match(/[A-Z]/)){
            num.style.color='white';
            pwd.style.border='2px solid green';
            medium.style.width='90%';
            poor.style.width='10%';
            strong.style.width='10%';
            medium.innerHTML='medium';
        
        
        }
        else{
            pwd.style.border='2px solid red';
            num.style.color='red';
            num.innerHTML='*should contain atleast one uppercase';
            poor.style.width='90%';
            medium.style.width='10%';
            strong.style.width='10%';
            medium.innerHTML='poor';
            return false;
        }
        if(pwd.value.match(/[a-z]/)){
            num.style.color='white';
            pwd.style.border='2px solid green';
            medium.style.width='90%';
            poor.style.width='10%';
            strong.style.width='10%';
            medium.innerHTML='medium';
            // return true;
        }
        else{
            pwd.style.border='2px solid red';
            num.style.color='red';
            num.innerHTML='*should contain atleast one lowercase';
            poor.style.width='90%';
            medium.style.width='10%';
            strong.style.width='10%';
            poor.innerHTML='poor';
             return false;
        }

         if(pwd.value.length<8){
            pwd.style.border='2px solid red';
            error.innerHTML='*password is too short';
            error.style.color='red';
            medium.innerHTML='medium';
            medium.style.width='90%';
            poor.style.width='10%';
            strong.style.width='10%';
            return false;
            
        }
        if(pwd.value.length>=8){
            pwd.style.border='2px solid green';
            error.style.color='white';
           
    
            
        }
        if(pwd.value.match(/[0-9]/) && pwd.value.match(/[A-Z]/) && pwd.value.match(/[a-z]/) && pwd.value.length>=8)
        {
            strong.innerHTML='strong';
            strong.style.width='100%';
            poor.style.width='10%';
            medium.style.width='10%';
            return true;
        }

}

function mailcheck(){
    let regexp=/^([a-zA-Z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;

    if(regexp.test(email.value)){
        mailerror.innerHTML='valid';
        mailerror.style.color='green';
        return true;
    }
    else{
         mailerror.innerHTML='invalid';
         mailerror.style.color='red';
         return false;
    }
    
    
}function passcheck(){
    if(pwd.value==pwd2.value){
        passerror.innerHTML='*password matches';
        passerror.style.color='green';
        return true;
    }
    else{
        passerror.innerHTML='*password does not match';
        passerror.style.color='red';
        return false;
    }
}


function phonecheck(){
    let regexp1=/^([0-9]{3})-([0-9]{3})-([0-9]{4})$/;
    let regexp2=/^([0-9]{3}).([0-9]{3}).([0-9]{4})$/;
    let regexp3=/^\d{10}$/;


    if(regexp1.test(phone.value) || regexp2.test(phone.value) || regexp3.test(phone.value)){
        pherror.innerHTML='valid';
        pherror.style.color='green';
        return true;
    }
    if(phone.value.length>10){
        pherror.innerHTML='invalid-should contain 10 digits only';
        pherror.style.color='red';
        return false; 
    }
    if(phone.value.match(/[a-z]/) || phone.value.match(/[A-Z]/) ){
        pherror.innerHTML='invalid-only numbers are accepted';
        pherror.style.color='red';
    }

    else{
         pherror.innerHTML='invalid';
         pherror.style.color='red';
         return false;
    }

}
