import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

function Todos(props) {
  const check1 = id => {
    props.check2(id);
  };
  const delTodo1 = id => {
    props.delTodo2(id);
  };
  return props.todos.map(todo => (
    // <h3 key = {todo.id}>{todo.title}</h3>
    <TodoItem
      key={todo.id}
      todo={todo}
      check1={id => check1(id)}
      delTodo1={id => delTodo1(id)}
    />
  ));
}

Todos.propsTypes = {
  todos: PropTypes.array.isRequired
};
export default Todos;
