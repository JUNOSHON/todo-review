import React from "react";
import {BiSolidTrashAlt} from "react-icons/bi";

export default function Todo({todo, onUpdate, onDelete}) {
  const {text, status} = todo;
  const handleDelete = () => onDelete(todo);
  
  return (
    <li>
      <span>{text}</span>
      <button onClick={handleDelete}><BiSolidTrashAlt/></button>
    
    </li>
  );
}
