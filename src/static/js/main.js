const loginsec=document.querySelector('.login-section')
const loginlink=document.querySelector('.login-link')
const registerlink=document.querySelector('.register-link')
const iconEye = document.querySelector('#icon-eye')
const password = document.querySelector('#password')
const eye = document.querySelector('#eye')
const iconEyer = document.querySelector('#icon-eyer')
const passwordr = document.querySelector('#passwordr')
const eyer = document.querySelector('#eyer')
const iconEyer2 = document.querySelector('#icon-eyer2')
const passwordr2 = document.querySelector('#passwordr2')
const eyer2 = document.querySelector('#eyer2')

iconEye.addEventListener('click', () =>{
    if (password.type === 'password'){
        password.type = 'text'
        eye.classList.remove('fa-eye-slash')
        eye.classList.add('fa-eye')
    } else{
        password.type = 'password'
        eye.classList.remove('fa-eye')
        eye.classList.add('fa-eye-slash')
    }

})
iconEyer.addEventListener('click', () =>{
    if (passwordr.type === 'password'){
        passwordr.type = 'text'
        eyer.classList.remove('fa-eye-slash')
        eyer.classList.add('fa-eye')
    } else{
        passwordr.type = 'password'
        eyer.classList.remove('fa-eye')
        eyer.classList.add('fa-eye-slash')
    }
    if (passwordr2.type === 'password'){
        passwordr2.type = 'text'
        eyer2.classList.remove('fa-eye-slash')
        eyer2.classList.add('fa-eye')
    } else{
        passwordr2.type = 'password'
        eyer2.classList.remove('fa-eye')
        eyer2.classList.add('fa-eye-slash')
    }

})
iconEyer2.addEventListener('click', () =>{
    if (passwordr.type === 'password'){
        passwordr.type = 'text'
        eyer.classList.remove('fa-eye-slash')
        eyer.classList.add('fa-eye')
    } else{
        passwordr.type = 'password'
        eyer.classList.remove('fa-eye')
        eyer.classList.add('fa-eye-slash')
    }
    if (passwordr2.type === 'password'){
        passwordr2.type = 'text'
        eyer2.classList.remove('fa-eye-slash')
        eyer2.classList.add('fa-eye')
    } else{
        passwordr2.type = 'password'
        eyer2.classList.remove('fa-eye')
        eyer2.classList.add('fa-eye-slash')
    }

})

registerlink.addEventListener('click',()=>{
    loginsec.classList.add('active')
})
loginlink.addEventListener('click',()=>{
    loginsec.classList.remove('active')
})
