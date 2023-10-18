import {useState} from "react";
import AddTodo from "../AddTodo/AddTodo.jsx";
import Todo from "../Todo/Todo.jsx";

export default function TodoList({filter}) {
  const [todos, setTodos] = useState([
    {
      id: "1",
      text: "리액트공부",
      status: "미완료됨",
    },
    {
      id: "2",
      text: "Javascript DeepDive 공부",
      status: "미완료됨",
    },
  ]);
  
  
  const handleAdd = (todo) => {
    //새로운 todo를 todos에 업데이
    setTodos([...todos, todo]);
  };
  const handleUpdate = (updated) => {
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  };
  const handleDelete = (deleted) => {
    setTodos(todos.filter((t) => t.id !== deleted.id));
  };
  
  const filtered = getFilteredItems(todos, filter);
  
  return (
    <section>
      <ul>
        {
          filtered.map(item => <Todo key={item.id} todo={item} onUpdate={handleUpdate} onDelete={handleDelete}/>)
        }
      
      </ul>
      <AddTodo onAdd={handleAdd}/>
    </section>
  );
}

function getFilteredItems(todos, filter) {
  if (filter === "모두") {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}
