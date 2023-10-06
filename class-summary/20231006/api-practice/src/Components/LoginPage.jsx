import { useState } from "react"

function LoginPage({handlePage}){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async(email, password) => {
        const baseUrl = "https://api.mandarin.weniv.co.kr/";
        const reqPath = 'user/login'
        const reqUrl = baseUrl + reqPath;

        const loginData = {
            "user":{
                "email":email,
                "password":password
            }
        };
        try{
        // 로그인해서 token꺼내기~!
        const res = await fetch(reqUrl,{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(loginData)
        });
        const json = await res.json();
        console.log(json);
        // 객체에 user가 없는 경우(로그인 실패)에 함수 종료
        // if(!json.user) {
        //     return
        // }
        const token = json.user.token;
        console.log(token);
        // 로컬스토리지에 토큰 저장하기.
        localStorage.setItem("token",token);
        } catch(error) {
            console.error("에러났어유 :", error)
        }
    }

    const inputEmail = (e)=>{
        setEmail(e.target.value);
    }
    const inputPassword = (e)=>{
        setPassword(e.target.value);
    }
    const submitLogin = (e)=>{
        e.preventDefault();
        login(email, password)
    }

    return(
        <>
            <h1>로그인</h1>
            <section>
                <h2>이메일, 비밀번호 입력하는 곳</h2>
                <form onSubmit={submitLogin}>
                    <input type="text" placeholder="이메일" value={email} onChange={inputEmail}/>
                    <input type="text" placeholder="비밀번호" value={password} onChange={inputPassword}/>
                    <button>로그인</button>
                    <button type="button" onClick={handlePage}>회원가입</button>
                </form>
            </section>
        </>
    )
}


export default LoginPage