import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "toilet paper",
      amount: 94.2,
      date: new Date(2015, 1, 12),
    },
    {
      id: "e2",
      title: "car insurance",
      amount: 450.2,
      date: new Date(2022, 4, 4),
    },
    {
      id: "e3",
      title: "new phone",
      amount: 700.25,
      date: new Date(2021, 3, 5),
    },
    {
      id: "e4",
      title: "new desk",
      amount: 120.5,
      date: new Date(2022, 6, 14),
    },
    {
      id: "e5",
      title: "keyboard",
      amount: 3500,
      date: new Date(2020, 6, 14),
    },
    {
      id: "e6",
      title: "mouse",
      amount: 1000,
      date: new Date(2019, 6, 14),
    },
    {
      id: "e7",
      title: "monitor",
      amount: 15000,
      date: new Date(2023, 6, 14),
    },
    {
      id: "e8",
      title: "headset",
      amount: 1900,
      date: new Date(2018, 6, 14),
    },
    {
      id: "e9",
      title: "mousepad",
      amount: 200,
      date: new Date(2015, 6, 14),
    },
    {
      id: "e10",
      title: "pc case",
      amount: 900,
      date: new Date(2017, 6, 14),
    },
    {
      id: "e11",
      title: "ram",
      amount: 400,
      date: new Date(2018, 6, 14),
    },
  ];

  return (
    <div>
      <NewExpense />

      <Expenses items={expenses} />
    </div>
  );
};

export default App;
