const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');
const contact=document.getElementById('contact');

form.addEventListener('submit',e =>{
    e.preventDefault();
    checkInput();
});
function checkInput(){

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const contactValue = contact.value.trim();

    if(usernameValue===''){
        setError(username,'Username Cannot be Blank');
    }
    else{
        setSuccess(username);
    }

    if(emailValue===''){

        setError(email,'Email Cannot be Blank');

    }else if(!isEmail(emailValue)){

        setError(email,'Email is not valid');
    }
    else{
        setSuccess(email);
    }

    if(passwordValue===''){
        setError(password,'Password is required');
    }
    else if(passwordValue.length < 7 && passwordValue.length > 13){
        setError(password,'Password must be 8 to 12 digits'); 
    }   
    else{
        setSuccess(password);
    }

    if(password2Value===''){
        setError(password2,'confirm password is required');
    }
    else if(password2Value != passwordValue){
        setError(password2,'Passwords Does not Match');
    }
    else{
        setSuccess(password2);
    }

    if(contactValue===''){
        setError(contact,'Mobile Number is required');
    }
    else if(contactValue.length !==10){
        setError(contact,'Mobile Number Must be 10 digits');
    }
    else{
        setSuccess(contact);
    }
}


function setError(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}
function setSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}

function isEmail(email){
     return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
