import { useState } from "react";
import Counter from './Counter'

function App() {
    const [productList, setProductList] = useState([
    {
        title: "개발자 무릎 담요",
        price: 17500,
        id: 101,
    },
    {
        title: "Hack Your Life 개발자 노트북 파우치",
        price: 29000,
        id: 102,
    },
    {
        title: "우당탕탕 라이켓의 실험실 스티커북",
        price: 29000,
        id: 103,
    },
    {
        title: "버그를 Java라 버그잡는 개리씨 키링",
        price: 29000,
        id: 104,
    },
    ]);

    function deleteProduct(id) {
    // let copy = [...productList]; 
    // let index = copy.findIndex((el) => el.id === id);
    // copy.splice(index, 1);
    // setProductList(copy);


    // 함수형 업데이트
        setProductList((prevData)=>{
            return(
                prevData.filter((item)=>{
                    return item.id !== id;
                })
            )}
        )
    }

    return (
    <>
        <ul>
        {productList.map((item) => {
        return (
            <li key={item.id}>
            <h2>{item.title}</h2>
            <strong>{item.price}원</strong>
            <button type="button" onClick={() => deleteProduct(item.id)}>
                삭제
            </button>
            </li>
        );
        })}
        </ul>
        <Counter/>

    </>
    
    );
}

export default App;
