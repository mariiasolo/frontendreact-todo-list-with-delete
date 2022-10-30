import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import App from './App';
import { Home } from './Home';


export const Nav = () => {

    const [value, setValue] = useState('home')

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <div>
            <Tabs value={value} onChange={handleChange}>
                <Tab label="Home" value={'home'} />
                <Tab label="TodoList" value={'todoList'} />
                
            </Tabs>

            {value === 'home' && <Home />}
            {value === 'todoList' && <App />}
            
        </div>
    )
}
