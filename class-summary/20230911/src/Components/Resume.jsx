import { useState } from "react";

function Resume(props){
    // let [like, setLike] = useState(0);
    let [like, setLike] = useState("");

    function clickLike(){
        // like += 1 ;
        if(like === '') setLike("like");
        else setLike("");
    }

    // let [like, setLike] = useState(false)

    // function clickLike(){
    //     if(!like){
    //         setLike(true)
    //     } else {
    //         setLike(false);
    //     }
    // }


    return(
        <>
            <h1>{props.name} 자기소개서</h1>
            <h1>{props.hello}</h1>
            <h2>{`취미 : ${props.hobby}`}</h2>
            <h2>{`좋아하는 음식 : ${props.food}`}</h2>
            <h2 style={{ color : props.color}}>{`좋아하는 색 : ${props.color}`}</h2>
            <button onClick={clickLike}>like</button>
            <span>{like}</span>
            {/* {
                like? <span>like</span> : null
            } */}
        </>
    )
}

export default Resume;