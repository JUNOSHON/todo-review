import React, {useState} from "react";

export default function AddTodo({onAdd}) {
  const [text, setText] = useState("");
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    onAdd({id: crypto.randomUUID(), text, status: "미완료됨"});
    setText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Todo 추가하기" value={text} onChange={handleChange}/>
      <button>Add</button>
    </form>
  );
}
