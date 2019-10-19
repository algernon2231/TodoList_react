import React , {useState} from "react";
import ReactDOM from "react-dom";
import Todos from './Todos'
import AddTodo from './AddTodo'
import "./styles.css";
import uuid from 'uuid/v1'

function App() {

  const [todos, setTodos ]= useState([
    {id: uuid(), title: 'Learn Coding', completed:false},
    {id: uuid(), title: 'Watch TV', completed:true},
    {id: uuid(), title: 'Go shopping', completed:false},
    {id: uuid(), title: 'Meet friends', completed:false},
  ])

  const delTodo2 = (id) => {
    
    setTodos(todos.filter(todo => todo.id !== id))
  }
  const check2 = (id) => {
      // todos.map(todo => {
      //   if(todo.id === id){
      //     todo.completed = !todo.completed
      //   }
      // setTodos([...todos],todo)  
      // })
       const test = todos.map(todo => {
         if(todo.id === id){
           todo.completed = !todo.completed
         }
         return todo
       })
       setTodos(test)
    
  } 
  const adtodo = (title) => {
    let todo = {
      id: uuid(),
      title,
      completed:false
    }
   setTodos([...todos,todo])
  }

  return (
    <div className="app">
      <AddTodo addTodo = {(title) => adtodo(title)} />
      <Todos 
          todos = {todos}
          check2  = {(id) => check2(id)} 
          delTodo2 = {(id) => delTodo2(id)} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
