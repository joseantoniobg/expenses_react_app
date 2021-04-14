import "./App.css";
import ExpenseListItems from "./components/Expenses/ExpensesListItems";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expences = [
    {
      id: "1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 20),
    },
    {
      id: "2",
      title: "New TV",
      amount: 799.99,
      date: new Date(2021, 0, 15),
    },
    {
      id: "3",
      title: "Toilet Paper",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
  ];

  return (
    <div className="App">
      <h2>Hummmmm</h2>
      <p>This is also visible!</p>
      <NewExpense />
      <ExpenseListItems items={expences} />
    </div>
  );
};

export default App;
