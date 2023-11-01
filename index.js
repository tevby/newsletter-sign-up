let email_input = document.querySelector('.emailinput'); 
let subscribe_btn = document.querySelector('.subscribe-btn');
let dismiss_btn = document.querySelector('.dismiss-btn'); 
let notvalid = document.querySelector('.notvalid-info'); 
let invalidemail = document.querySelector('.invalidemail'); 
let forminput = document.querySelector('.input-form'); 
let inputContainer = document.querySelector('.container');
let successMessage = document.querySelector('.card');

function validateEmail(email) {
     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/;
     return emailRegex.test(email);
}
function formSuccess(){
    let emailPlaceholder = document.querySelector('.email-placeholder');
    emailPlaceholder.textContent = email_input.value;
    inputContainer.classList.add('hide');
    successMessage.classList.remove('hide');
}

subscribe_btn.addEventListener('click', function (e) {
     e.preventDefault(); 
     let email = email_input.value;
     if (validateEmail(email)) {
         formSuccess()
         notvalid.textContent = "";
         invalidemail.style.border = 'none'; 
     }
     else {
         notvalid.textContent = "Valid Email Required";
         invalidemail.style.border = '1px solid red'; 
     }
 });

dismiss_btn.addEventListener('click', function (e) {
    inputContainer.classList.remove('hide');
    successMessage.classList.add('hide')

 })
