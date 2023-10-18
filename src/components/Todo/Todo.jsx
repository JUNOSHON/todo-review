import React from "react";
import {BiSolidTrashAlt} from "react-icons/bi";

export default function Todo({todo, onUpdate, onDelete}) {
  const {text, status} = todo;
  const handleDelete = () => onDelete(todo);
  const handleChange = (e) => {
    const status = e.target.checked ? "완료됨" : "미완료됨;";
    onUpdate({...todo, status});
    
  };
  
  return (
    <li>
      <input type="checkbox" id="checkbox" checked={status === "완료됨"}
             onChange={handleChange}/>
      <label htmlFor="checkbox">{text}</label>
      <button onClick={handleDelete}><BiSolidTrashAlt/></button>
    
    </li>
  );
}
