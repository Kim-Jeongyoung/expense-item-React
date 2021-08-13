import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // function clickHandler() {}
  let title = props.title;

  const clickHandler = () => {
    title = 'Updated!';
    console.log('Clicked!!!');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* listening to events */}
      <button onClick={clickHandler}>Change Title</button>
      {/* <button
        onClick={() => {
          console.log('Clicked!');
        }}
      >
        Change Title
      </button> */}
    </Card>
  );
};

export default ExpenseItem;
