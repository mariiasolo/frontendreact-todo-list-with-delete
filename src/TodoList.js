import React, {useState} from 'react';
import './App.css';
import TodoTable from './TodoTable';



function TodoList() {
  const [todo, setTodo] = useState({description: '', date: ''});
  const [todoList, setTodoList] = useState([]);

  const addTodo = (event) => {
    setTodoList([...todoList, todo]);
  }

  const deleteTodo = (row) =>{
    setTodoList(todoList.filter ((todo, index) =>index !== row));
  }

  return ( 
    <div className = "App">
        <input type ="date"  value= {todo.date} onChange = {event => setTodo ({...todo, date: event.target.value})} />
        <input placeholder="text"  value={todo.description} onChange = {event => setTodo ({...todo, description: event.target.value})} />
        
        <button onClick = {addTodo} > Add</button>
            

    <TodoTable todoList={todoList} deleteTodo={deleteTodo} /> 
       
    </div>);
             
    
}

export default TodoList;