import { useState } from "react";
import JoinPage from "./Components/JoinPage";
import LoginPage from "./Components/LoginPage";

function App() {

  const [page, setPage] = useState(true);

  const handlePage = () => {
    setPage((prev)=>{
      return !prev
    })
  }

  return (
    <div>
      {
        page? <LoginPage handlePage={handlePage}/> : <JoinPage handlePage={handlePage}/>
      }
      
    </div>
  );
}
export default App;
