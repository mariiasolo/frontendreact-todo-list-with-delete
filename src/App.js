import React, {useState} from 'react';
import './App.css';
import TodoList from './TodoList';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as ReactDOM from "react-dom";

import { Routes, Route } from "react-router-dom";
import ResponsiveAppBar from './Nav';

function App() {
  return (
  <div className ="App">
    <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            My TodoList
          </Typography>
          
        </Toolbar>
      </AppBar>

    <TodoList />
    
  </div> 
  );
}

export default App;