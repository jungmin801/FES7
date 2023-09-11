import React, { useState } from 'react'


function Login({user, isConfirmed, setIsConfirmed}){

    const [id, setId] = useState('');
    const [pw, setPw] = useState(''); 
    const handleLoginInput = (event) => {
        setId(event.target.value);
    }

    const handlePasswordInput = (event) =>{
        setPw(event.target.value);
    }

    const handleLoginSubmit = (event) =>{
        event.preventDefault();
        if(id === ''){
            alert('아이디를 입력하지 않았습니다')
        }

        if(pw === ''){
            alert('비밀번호를 입력하지 않았습니다')
        }

        if(id === user.idUser && pw === user.pwUser.toString()){
            setIsConfirmed(true);
        }
    }

    return(
        <form onSubmit={handleLoginSubmit}>
            <label>
                아이디 :
                <input type="text" onChange={handleLoginInput} />
            </label>
            <br />
            <label>
                비밀번호 :
                <input type="password" onChange={handlePasswordInput} />
            </label>
            <button type="submit">로그인</button>
        </form>
    )
}

export default Login;