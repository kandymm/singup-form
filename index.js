const form = document.getElementById('form');


form.addEventListener('submit', e => {
    e.preventDefault();

    const first =form['firstname'].value;
    const last =form['lastname'].value;
    const email =form['email'].value;
    const password =form['password'].value;

    if(first === ""){
        addErrorTo('firstname', 'First name is required');   
    }else{
        removeErrorTo('firstname');
    }

    if(last === ""){
        addErrorTo('lastname', 'Last name is required');   
    } else{
        removeErrorTo('lastname');
    }

    if(email ===""){
        addErrorTo('email', 'Email is required');   
    }else if(!isValid(email)){
        addErrorTo('email', 'Email  is not valid');   
    }else{
        removeErrorTo('email');
    }

    if(password  === ""){
        addErrorTo('password', 'Password is required');   
    } else{
        removeErrorTo('password');
    }

   
})

function addErrorTo(field, message){
    const formControl = form[field].parentNode;
        formControl.classList.add('error'); 
    const small = formControl.querySelector('small');
        small.innerText = message;
        small.style.opacity = "1";
}
function removeErrorTo(field){
    const formControl = form[field].parentNode;
        formControl.classList.remove('error');
    const small = formControl.querySelector('small');
        small.style.opacity = "0";
}
function isValid(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).toLowerCase());
}