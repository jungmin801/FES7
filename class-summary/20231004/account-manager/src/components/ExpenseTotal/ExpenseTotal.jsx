import React from 'react'
import { useSelector } from 'react-redux';

export default function ExpenseTotal() {

    const expenseList = useSelector((state)=>state.expense.expenseList);
    const income = useSelector((state)=>state.expense.income);

    const totalExpense = expenseList.reduce((acc, cur) => {
        return acc + cur.price
    }, 0);
    const balance = income - totalExpense;


  return (
    <>
        <div>
            <span>총 지출 : </span>
            <span>₩ {totalExpense}</span>
        </div>
        <div>
            <span>잔액 : </span>
            <span>₩ {balance}</span>
        </div>
    </>
  )
}
