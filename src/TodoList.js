import React, {useState, useRef} from 'react';
import './App.css';
import TodoTable from './TodoTable';

import { AgGridReact } from 'ag-grid-react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Snackbar from '@mui/material/Snackbar';


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
      setOpen(true);
    } else {
      alert('Select a row first!')
    }
  }
  
    
  const [open, setOpen] = React.useState(false);

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
    <div>
      <Stack 
        direction="row" 
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
        <TextField variant="standard" label ="date"  defaultValue="2017-05-24" value= {todo.date} onChange = {event => setTodo ({...todo, date: event.target.value})} />
        <TextField variant="standard" label="description"  value={todo.description} onChange = {event => setTodo ({...todo, description: event.target.value})} />
        <TextField variant="standard" label="priority"  value={todo.priority} onChange = {event => setTodo ({...todo, priority: event.target.value})} />
        
        <Button 
          variant="contained" 
          startIcon={<AddIcon />}
          onClick = {addTodo} > Add
        </Button>
        <Button 
          variant="contained" 
          color="error" 
          startIcon={<DeleteIcon />}
          onClick = {deleteTodo} > Delete
        </Button>

        </Stack>

        <div className= 'ag-theme-material' style={{width: '50%', height:500, margin:'auto'}}>
        <AgGridReact 
            ref={gridRef}
            onGridReady={ params => gridRef.current = params.api }
            rowSelection="single"
            rowData={todoList}
            columnDefs={columnDefs}
        />
    </div>  
            
    <Snackbar 
      open={open}
      autoHideDuration={3000}
      onClose={() => setOpen(false)}
      message="Todo task deleted successfully"
    />
    <TodoTable todoList={todoList} deleteTodo={deleteTodo} /> 
       
    </div>);
             
    
}


export default TodoList;