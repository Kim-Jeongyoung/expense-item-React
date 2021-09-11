import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // function clickHandler() {}
  //useState() manage by React somewhere in memory
  // const [title, setTitle] = useState(props.title);
  // console.log('ExpenseItem evaluated by React');

  // const clickHandler = () => {
  //   setTitle('Updated!'); //assign title with setTitle
  //   console.log('title');
  // };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;

// useEffect(
//   () => console.log(title),
//   [title]
// );

// 48. <h2>{props.title}</h2> => <h2>{title}</h2>State is updating but  you are not using the state variable anywhere so you cannot see the change.

// title is state variable, props.title is the prop value title is updating, not the props.title.

// use title instead of props.title in h2 and change will be reflected
