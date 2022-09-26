import React from 'react';


function TodoTable (props) {
    return (
    <div className = "App">
        <table>
            <tbody>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                </tr>        
                { 
                props.todoList.map ((todo, index) => 
                    <tr key= {index}>
                        <td> {todo.date} </td>
                        <td> {todo.description }</td>
                        <td><button onClick = {() => props.deleteTodo(index)}>Delete</button></td>
                    </tr>
                )
                }
            </tbody>
        </table>
    </div>  
    );
}

export default TodoTable;