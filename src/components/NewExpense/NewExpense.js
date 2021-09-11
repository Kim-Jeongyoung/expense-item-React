import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  //() 안 이름은 알아서 정하기
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      {/* nameing is up to you */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
// import ExpenseForm from './ExpenseForm';
// import './NewExpense.css';

// const NewExpense = () => {
//   return (
//     <div calssName="new-expense">
//       <ExpenseForm />
//     </div>
//   );
// };

// export default NewExpense;
