import Display from "./components/Display";
import MenuList from "./components/MenuList";
import { useState } from "react";
import "./css/style.css";

function App() {
  let [currentMood, setCurrentMood] = useState(null);

  // function chooseMood(e) {
  //   setMood(e.target.textContent);
  // }

  return (
    <div>
      <h1>오늘의 기분을 선택해주세요😁</h1>
      <div>
        <MenuList setCurrentMood={setCurrentMood} />
        <Display currentMood={currentMood} />
      </div>
    </div>
  );
}
export default App;
