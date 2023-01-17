const showbar=document.querySelector(".nav__links ")
const toggler=document.querySelector(".nav__toggler")
toggler.addEventListener("click",()=>showbar.classList.toggle("nav__link--show"))



const form = document.getElementById('form');
const username = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const add =document.getElementById("address")

const indiaRegex = /^\+91\d{10}$/;

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const nameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const done=[]


    if(nameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
        done.push(true)
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
        done.push(true)
    }

    if(phoneValue === '') {
        setError(phone, 'Password is required');
    } else if (phoneValue.match(indiaRegex) ) {
        setError(phone, 'Password must be at least 8 character.')
    } else {
        setSuccess(phone);
        done.push(true)
    }
    
    if (done.length===3){
        document.getElementById("done").innerText="submitted"
        username.value=""
        email.value=""
        phone.value=""
        add.value=""
        setTimeout(()=>document.getElementById("done").innerText="",2000)
    }

};