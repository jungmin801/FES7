import styled, { css } from 'styled-components'

const BorderNone = css`
    border:none;
`;

const BorderRadius = css`
    border-radius : 10px;
`;

const BoxShadow = css` 
box-shadow: 0 0 5px #33333333;
`;

const Btn = styled.button`
    background-color: royalblue;
    color: white;
`;

const ExtendedBtn = styled(Btn)`
    background-color: ${props => props.bg};
    color: ${props => props.color};
    ${BorderNone};
    ${BorderRadius};
    ${BoxShadow};
`;



function App() {

  return (
    <div>
      <Btn>버튼</Btn>
      <ExtendedBtn bg='royalblue'>버튼2</ExtendedBtn>
      <ExtendedBtn bg='green' color='black'>버튼3</ExtendedBtn>
    </div>
  );
}
export default App;
