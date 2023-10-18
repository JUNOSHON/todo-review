import {useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoList from "./components/TodoList/TodoList.jsx";
import Header from "./components/Header/Header.jsx";


const filters = ["모두", "미완료됨", "완료됨"];

function App() {
  const [filter, setFilter] = useState(filters[0]);
  
  return (
    <>
      <Header filters={filters} filter={filter} onFilterChange={setFilter}/>
      <TodoList filter={filter}/>
    </>
  );
}

export default App;
