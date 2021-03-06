import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    // console.log('Expenses.js');
    // console.log(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;

// props.expenses 를 props.items로 바꿔줌 이름이 겹치니까

// return 다음에 하나의 root element가 와야해서 <div></div>안에 넣어줌
// props 넣어주면 자동으로 App.js에 있는 오브젝트 내용 가져다 쓸 수 있음
/*
App.js에서 가져온 다음 props 다 넣어줘야 사용가능
<ExpenseItem
title={expenses[0].title}
amount={expenses[0].amount}
date={expenses[0].date}
/>
<ExpenseItem
title={expenses[1].title}
amount={expenses[1].amount}
date={expenses[1].date}
/>
<ExpenseItem
title={expenses[2].title}
amount={expenses[2].amount}
date={expenses[2].date}
/>
<ExpenseItem
title={expenses[3].title}
amount={expenses[3].amount}
date={expenses[3].date}
/>
*/
