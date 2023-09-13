import React from "react";
import styled from "styled-components";

const ContentDiv = styled.div`
  margin: 40px;
`;

// styled-components는 자바스크립트로 스타일을 적용하는 것.
// 즉, 함수를 실행해서 스타일을 만든다.
const ContentH2 = styled.h2`
  width: 200px;
  margin: 0 auto;
  text-align: center;
  color:red;
`;


const App = () => {
	return (
		<ContentDiv>
            <ContentH2>Q&A</ContentH2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos excepturi
                corrupti quo blanditiis! Adipisci amet corporis ipsum odio minima
                aliquid quisquam! Dignissimos natus laborum qui veritatis quaerat eaque!
                Nemo, ullam.
            </p>
            <Hello/>
        </ContentDiv>
	);
};

function Hello(){
  return <h2>hello world</h2>
}

export default App;