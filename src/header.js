import React from 'react';
import {AppBar, Typography, Toolbar, IconButton} from '@mui/material';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const header = () => {
  return (
    <React.Fragment>
        <AppBar sx={{background:'white'}}>
            <Toolbar>
                <Typography sx={{color:'black', fontSize:'30px'}}>VVVHOA</Typography>
                
                <CircleNotificationsIcon sx={{marginLeft:'auto', color:'black'}}/>
                
                <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    
                   
                    
                    color="inherit"
                    >
                    <AccountCircleIcon sx={{color:'black'}} />
                </IconButton >
            </Toolbar>
        </AppBar>
    </React.Fragment>
  );
};

export default header;
