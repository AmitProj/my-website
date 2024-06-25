let nav_link = document.querySelector(".nav_link");
let menu_bar = document.querySelector(".menu_bar");

menu_bar.addEventListener("click",function(){
    nav_link.classList.toggle('tabMenuLink')
})

let form =document.getElementById('form')
let Uname =document.getElementById('username')
let phone =document.getElementById('phone')
let email =document.getElementById('email')
// let password =document.getElementById('password')
// let cpassword =document.getElementById('cpassword')
const submitbtn = document.getElementById('submitBtnForm')
let msg =document.getElementById('msg')

form.addEventListener('submit', (e)=>{
 e.preventDefault();

 validate();
});
function validate(){
    const usernameValue = username.value.trim();
    const phoneValue = phone.value.trim();
    const emailValue = email.value.trim();

 
       

    if(usernameValue == "" ){
        setErrorMsg(username,  'enter user name ')}
    
    if(phoneValue === "" || phoneValue.length < 10 || phoneValue.length > 10)
        {setErrorMsg(phone,  'enter user phone ')} 

    if(emailValue === "")
        {setErrorMsg(email,  'enter user email ')} 
            else{setSuccessMsg(email)};
    let userData =[
        usernameValue, emailValue, phoneValue
    ]
  
}
function checkNamDetails(){
    const usernameValue = username.value.trim();
    if(usernameValue == "" ){
        setErrorMsg(username,  'enter user name ')}
    else if(usernameValue.length < 2 || usernameValue.length > 25){
        setErrorMsg(username, 'one letter is not valid')}
    else{setSuccessMsg(username)} ;  
}
function checkNumbDetails(){
    const phoneValue = phone.value.trim();
    if(phoneValue === "" )
        {setErrorMsg(phone,  'enter user phone ')} 
    else if(phoneValue.length < 10 || phoneValue.length > 10){
        setErrorMsg(phone,  'Only 10 digites mobile number')}
    else{setSuccessMsg(phone)};
}
function checkEmaiDetails(){
    const emailValue = email.value.trim();
    if(emailValue === "")
        {setErrorMsg(email,  'enter user email ')} 
    else if(emailValue.length < 4 ){
        setErrorMsg(email, 'enter your email')}
    else{setSuccessMsg(email)};
}

function setErrorMsg( input,errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = errormsgs;
}
function setSuccessMsg( input ){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}