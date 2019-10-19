import React from "react";
import PropTypes from "prop-types";

function TodoItem(props) {
  const completed1 = () => {
    return {
      backgroundColor: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: props.todo.completed ? "line-through" : "none"
    };
  };
  const handleCheck = () => {
    props.check1(props.todo.id);
  };
  const delTodo = () => {
    props.delTodo1(props.todo.id);
  };
  const btnShow = () => {
    if (props.todo.completed) {
      return (
        <button style={btnStyle} onClick={delTodo}>
          X
        </button>
      );
    }
  };
  return (
    <div style={completed1()}>
      <p>
        <input
          type="checkbox"
          defaultChecked={props.todo.completed}
          onChange={handleCheck}
        />
        {props.todo.title}
        {btnShow()}
      </p>
    </div>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};
const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 10px ",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
};

export default TodoItem;
