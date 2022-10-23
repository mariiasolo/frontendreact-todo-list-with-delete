import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const Home = () =>{

    return(
        <div className="App">
            <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Welcome to React to do list application! 

          </Typography>
        
          
        </Toolbar>
      </AppBar>
        <div> The app is done for the course Front End Programming at Haaga-Helia Uas. 
        </div>

      </div> 
  );
}