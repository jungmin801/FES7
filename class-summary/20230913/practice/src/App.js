import styled from 'styled-components'

const SimpleButton = styled.button`
  color : green;
  background-color : beige;
`;

const LargeButton = styled(SimpleButton)`
  font-size : 30px;
`;

const ReactButton = props => {
  console.log(props)
  return <button className={props.className}>{props.children}</button>
}

const ReactLargeButton = styled(ReactButton)`
  font-size : 30px;
`

const PrimaryButton = styled.button`
  color: ${function(props){
    if(props.primary){
      return 'red'
    } else{
      return 'blue'
    }
  }}
`;

function App() {
  return (
    <div>
      <SimpleButton>simple</SimpleButton>
      <LargeButton>large</LargeButton>
      <ReactButton>react</ReactButton>
      <ReactLargeButton>ReactLarge</ReactLargeButton>
      <PrimaryButton>Normal</PrimaryButton>
      <PrimaryButton primary>primary</PrimaryButton>
    </div>
  );
}
export default App;
