import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>August 9th 2021</div>
      <div className="expense-item__description">
        <h2>Mango Dragon fruit tea</h2>
        <div className="expense-item__price">$5.73</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
