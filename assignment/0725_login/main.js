// 요소 가져오기
const idBox = document.querySelector('.id-box');
const pwBox = document.querySelector('.pw-box');
const loginId = document.querySelector('.login-id');
const password = document.querySelector('.password');
const btnLogin = document.querySelector('.btn-login');

// 에러 메세지 띄우기
function displayError(box, errorMessage, button){
    let errorElement = box.querySelector('.error-input')
    if(!errorElement){
        errorElement = document.createElement('strong');
        box.appendChild(errorElement);

        errorElement.className = 'error-input'
        errorElement.innerText = errorMessage;
        errorElement.style.color = '#F4492E';
        errorElement.style.marginTop = '6px';

        button.classList.add('error-border');
    }
}

// 에러 메세지 지우기(원래상태로 복구)
function resetError(box, button){
    let errorInput = box.querySelector('.error-input');
    if (errorInput) {
        errorInput.remove();
    }
    button.classList.remove('error-border');
}


// Input 값 유효성 검사
function validateInput(inputValue, box, errorMessage, button) {
    if (inputValue === '') {
            displayError(box, errorMessage, button);
    } else {
        resetError(box, button);
    }
}


// 버튼 클릭 이벤트
btnLogin.addEventListener('click', (event)=>{
    event.preventDefault();

    let valueID = loginId.value;
    let valuePW = password.value;

    validateInput(valueID, idBox, '아이디를 입력하세요', loginId);
    validateInput(valuePW, pwBox, '비밀번호를 입력하세요', password);
}
)
