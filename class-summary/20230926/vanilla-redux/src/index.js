import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import App from "./App";
import { createStore } from "redux";
import rootReducer from "./modules";
import { Provider } from "react-redux";


const store = createStore(rootReducer);


const container = document.getElementById("root");
const root = createRoot(container);

// provider를 통해 app 안의 모든 컴포넌가 store에 모두 접근할 있다.
root.render(
    <Provider store={store}>
        <App />     
    </Provider>
    
);

// import { createStore } from 'redux';


// const plus = document.getElementById('plus');
// const minus = document.getElementById('minus');
// const number = document.getElementById('number');
// const quantity = document.getElementById('quantity');
// const totalPrice = document.getElementById('total');

// const PRICE = 17500;

// function countReducer(state = 0, action){
//     switch (action.type) {
//         case 'ADD' :
//             minus.disabled = false;
//             return state + 1;
//         case "SUBTRACT":
//             plus.disabled = false;
//             return state - 1;
//         default:
//             return state;
//     }
// }

// const store = createStore(countReducer);


// // let count = 0;

// // const updateResult = (c) => {
// //     number.textContent = count;
// //     quantity.textContent = c;
// //     totalPrice.textContent = c * PRICE;
// // }

// const addNumber = () => {
//     // count += 1;
//     // minus.disabled = false;
//     // updateResult(count);
//     store.dispatch({type : 'ADD'})
// }

// const subtractNumber = () =>{
//     // count -= 1;
//     // plus.disabled = false;
//     // updateResult(count);

//     store.dispatch({type : 'SUBTRACT'})
// }


// // 렌더 함수
// const handleWrite = () => {
//     number.textContent = store.getState();
//     quantity.textContent = store.getState();
//     totalPrice.textContent = store.getState() * PRICE;
//     console.log(store.getState());
// }

// store.subscribe(handleWrite);

// // number.textContent = count;
// // updateResult(count);

// plus.addEventListener("click", addNumber);
// minus.addEventListener("click", subtractNumber);