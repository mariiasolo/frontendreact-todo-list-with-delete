import React, {useState, useRef} from 'react';
import './App.css';
import TodoTable from './TodoTable';

import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';





function TodoList() {
  const [todo, setTodo] = useState({
    description: '', 
    date: '',
    priority: ''
  });
  const [todoList, setTodoList] = useState([]);

  const addTodo = (event) => {
    setTodoList([...todoList, todo]);
  }

  const deleteTodo = () => {  
    if (gridRef.current.getSelectedNodes().length > 0) {
      setTodoList(todoList.filter((todo, index) =>index !== gridRef.current.getSelectedNodes()[0].childIndex))
    } else {
      alert('Select a row first!')
    }
  }
  
    

  const [columnDefs] = useState([
        {field:'description', sortable: true, filter:true, floatingFilter: true, animateRows: true,},
        {field: 'date', sortable: true, filter:true, floatingFilter: true, animateRows: true,},
        { 
            field: 'priority', 
            sortable: true, 
            filter:true,
            floatingFilter: true,
            animateRows: true,
            cellStyle: params => params.value === "High" ? {color: 'red'} : {color: 'black'}
        }
    ]);
    const gridRef = useRef();

  return ( 
    <div className = "App">
        <input type ="date"  value= {todo.date} onChange = {event => setTodo ({...todo, date: event.target.value})} />
        <input placeholder="text"  value={todo.description} onChange = {event => setTodo ({...todo, description: event.target.value})} />
        <input placeholder="priority"  value={todo.priority} onChange = {event => setTodo ({...todo, priority: event.target.value})} />
        
        <button onClick = {addTodo} > Add</button>
        <button onClick = {deleteTodo} > Delete</button>


        <div className= 'ag-theme-material' style={{width: '50%', height:500, margin:'auto'}}>
        <AgGridReact 
            ref={gridRef}
            onGridReady={ params => gridRef.current = params.api }
            rowSelection="single"
            rowData={todoList}
            columnDefs={columnDefs}
        />
    </div>  
            

    <TodoTable todoList={todoList} deleteTodo={deleteTodo} /> 
       
    </div>);
             
    
}


export default TodoList;