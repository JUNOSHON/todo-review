import {useState} from "react";
import AddTodo from "../AddTodo/AddTodo.jsx";
import Todo from "../Todo/Todo.jsx";

export default function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: "1",
      text: "리액트공부",
      status: "active",
    },
    {
      id: "2",
      text: "Javascript DeepDive 공부",
      status: "active",
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
  
  return (
    <section>
      <ul>
        {
          todos.map(item => <Todo key={item.id} todo={item} onUpdate={handleUpdate} onDelete={handleDelete}/>)
          
        }
      
      </ul>
      <AddTodo onAdd={handleAdd}/>
    </section>
  );
}
