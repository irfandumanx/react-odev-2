import React from "react";
import "./ExpenseFilter.css";

function ExpenseFilter({ items, handleChangeYear }) {
  let dates = Array.from(
    new Set(items.map((e) => e.date.getFullYear()).sort((a, b) => b - a))
  );
  return (
    <div className="expense-filter">
      <h4 style={{ color: "white", marginBlockEnd: "0.5em" }}>
        Filter By Year
      </h4>
      <select
        onChange={(e) => handleChangeYear(parseInt(e.target.value))}
        name="years"
        id="years"
      >
        <option value={-1}>Hepsini getir</option>
        {dates.map((e) => {
          return (
            <option key={e} value={e}>
              {e}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default ExpenseFilter;
