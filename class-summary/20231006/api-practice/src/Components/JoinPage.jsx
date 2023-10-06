import { useState } from "react"

const JoinPage = ({handlePage})=>{
    
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [accountName, setAccountName] = useState('');
    const [imgSrc, setImgSrc] = useState('https://api.mandarin.weniv.co.kr/Ellipse.png');
    const [intro, setIntro] = useState('');

    const join = async (joinData)=>{
        const reqUrl = "https://api.mandarin.weniv.co.kr/user/";
        const res = await fetch(reqUrl,{
            method: "POST",
            headers:{
                "Content-type" : "application/json"
            },
            body:JSON.stringify(joinData)
        });
        const json = await res.json();
        console.log(json);
    }

    const inputUserName = (event) => {
        setUsername(event.target.value)
    }    
    
    const inputEmail = (event) => {
        setEmail(event.target.value)
    } 

    const inputPassword = (event) => {
        setPassword(event.target.value)
    } 

    const inputAccountName = (event) => {
        setAccountName(event.target.value)
    } 

    const inputIntro = (event) => {
        setIntro(event.target.value)
    }

    const uploadImage = async(imageFile) => {
        const baseUrl ="https://api.mandarin.weniv.co.kr/"
        const reqUrl = baseUrl + "image/uploadfile"

        // 폼 데이터 만들기
        const form = new FormData();
        // 폼 데이터에 값을 추가하기
        form.append('image', imageFile);

        const res = await fetch(reqUrl, {
            method: "POST",
            body: form
        })
        const json = await res.json();
        const imgURL = baseUrl + json.filename;
        setImgSrc(imgURL);
    }
    const onChangeImage = (event) => {
        // 파일 가져오기
        const imageFile = event.target.files[0];
        uploadImage(imageFile);
    }
    
    const submitJoin = () => {
        const joinData = {
            user: {
                username : username,
                email : email,
                password : password,
                accountname : accountName,
                intro : intro,
                image : imgSrc
            }
        }
        join(joinData);
    }


    return(
        <>
        <section >
            <h2 >이메일로 회원가입</h2>
            <div >
                <label htmlFor="emailInput">이메일</label>
                <input value={email} onChange={inputEmail} type="email" id="emailInput" name="email" placeholder="이메일 주소를 알려주세요."/>
            </div>
            <div>
                <label htmlFor="passwordInput">비밀번호</label>
                <input value={password} onChange={inputPassword} type="password" name="password" id="passwordInput" placeholder="비밀번호를 설정해 주세요."/>
            </div>
            <button type="button" >다음</button>
        </section>
        <section>
            <h2 >프로필 설정</h2>
            <p>나중에 언제든지 변경할 수 있습니다.</p>
            <label htmlFor="profileImg">
                <img src={imgSrc} alt="" id="imagePre"/>
            </label>
            <input type="file" onChange={onChangeImage} id="profileImg" name="image" accept="image/*" />
            <div >
                <label htmlFor="userNameInput">사용자 이름</label>
                <input value={username} onChange={inputUserName} type="text" id="userNameInput" name="username" placeholder="2~10자 이내여야 합니다."/>
            </div>
            <div >
                <label htmlFor="userIdInput">계정 ID</label>
                <input value={accountName} onChange={inputAccountName} type="text" id="userIdInput" name="accountname" placeholder="영문, 숫자, 특수문자(,), (_)만 사용 가능합니다."/>
            </div>
            <div>
                <label htmlFor="userIntroInput">소개</label>
                <input value={intro} onChange={inputIntro} type="text" id="userIntroInput" name="intro" placeholder="자신과 판매할 상품에 대해 소개해 주세요."/>
            </div>
            <button type="button" onClick={submitJoin} >감귤마켓 시작하기</button>
            <button type="button" onChange={handlePage}>로그인 페이지로 가기</button>
        </section>
        </>
    )
}

export default JoinPage
