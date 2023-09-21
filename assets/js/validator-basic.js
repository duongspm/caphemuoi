const username = document.getElementById('username')
const address = document.getElementById('address')
const phone = document.getElementById('phone')
const email = document.getElementById('email')
const title = document.getElementById('title')
const content = document.getElementById('content')

const form = document.getElementById('form-1')

function showMessageErr(input,message){
    let parent = input.parentElement;
    let message = parent.querySelector('.form-message')
    parent.classList.add('invalid')
    message.innerText = message
}
function showSuccess(input){
    let parent = input.parentElement;
    let message = parent.querySelector('.form-message')
    parent.classList.remove('invalid')
    message.innerText = ''
}
// showMessageErr(username,'haha')
function checkEmptyError(listInput){
    listInput.forEach(input => {
        input.value = input.value.trim()
        if(!input.value){
            showMessageErr(input,"rong")
        }else{
            showSuccess(input)
        }
    })
}

function checkLengthError(input, min, max){
    input.value = input.value.trim()
    if(input.value.length < min){
        showMessageErr(input,`Phai co it nha ${min} ky tu`)
        return true
    }
    if(input.value.length > max){
        showMessageErr(input,`Khong duoc qua ${min} ky tu`)
        return true
    }
    showSuccess(input)
    return false
}

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    
    let isEmtyError = checkEmptyError([username, email, title, content])

    let isPhoneLength = checkLengthError(phone, 9,10)

    if(isEmtyError || isPhoneLength){

    }else
    {
        
    }
})