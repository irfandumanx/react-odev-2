import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = ({ items }) => {
  const [expenseItem, setExpenseItem] = useState(items);
  const handleChangeYear = (year) => {
    setExpenseItem(
      year == -1
        ? items
        : items.filter((item) => item.date.getFullYear() === year)
    );
  };
  return (
    <Card className="expenses">
      <ExpenseFilter items={items} handleChangeYear={handleChangeYear} />
      {expenseItem.map((e) => (
        <ExpenseItem key={e.id} {...e} />
      ))}
    </Card>
  );
};

export default Expenses;
