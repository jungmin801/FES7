import React, { useState } from 'react'

export default function Counter() {

    const [count, setCount] = useState(0);


    // state 함수는 비동기로 실행된다. 언제 state가 변경될지 모르니까.
    // 동일한 함수가 여러번 호출되면 기다렸다가 맨 마지막 함수만 실행한다.
    function increment(){
        setCount(count + 1)
        setCount(count + 1)
        setCount(count + 1)
    }

    function decrement(){
        setCount(count - 1)
    }

  return (
    <div>
        <h2>
            {count}
        </h2>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
    </div>
  )
}
