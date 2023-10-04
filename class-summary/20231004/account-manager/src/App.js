import ExpenseInput from "./containers/ExpenseInput/ExpenseInput";
import ExpenseList from "./containers/ExpenseList/ExpenseList";
import IncomeInput from "./containers/IncomeInput/IncomeInput";
import ExpenseTotal from "./components/ExpenseTotal/ExpenseTotal";

function App() {
  return (
    <article>
      <header>
        {/* 사용자의 한달 월급을 입력. */}
        <IncomeInput/>
      </header>
      <main>
        {/* 사용자가 구입한 상품의 이름과 가격을 입력 */}
        지출 input
        <ExpenseInput />  
        <div>
          {/* 사용자가 그동한 구입한 상품의 목록이 랜더링 */}
          지출 기록
          <ExpenseList />
          <div>
            {/* 사용자가 구입한 상품 지출액의 총합 */}
            지출 총합
            <ExpenseTotal/>
          </div>
        </div>
      </main>
    </article>
  );
}
export default App;