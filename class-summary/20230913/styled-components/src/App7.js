import styled from "styled-components";

const CardDiv = styled.div`
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  margin-bottom: 20px;
  width: ${(props) => (props.className === "setting" ? "200px" : "400px")};
`;

const Card = (props) => {
    return (
      <CardDiv className={props.className}>
        <h3>{props.value}</h3>
        <hr />
      </CardDiv>
    );
  };

function App() {
  return (
    <>
      <Card className="setting" value="챌린지 설정">
      </Card>
      <Card className="share" value="서비스 공유하기">
      </Card>
    </>
  );
}

export default App;