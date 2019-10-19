import React, { useState } from "react";

function AddTodo(props) {
  const [title, setTitle] = useState("");
  const handleChange = e => {
    setTitle(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    props.addTodo(title);
    document.getElementById("addTodo").value = "";
    setTitle("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="addTodo"
          value={props.addtodo}
          id="addTodo"
          style={{ flex: 10 }}
          placeholder="Add Todo..."
          onChange={handleChange}
        />
        <button disabled={title.length === 0} type="submit" style={{ flex: 1 }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
