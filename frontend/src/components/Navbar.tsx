import React, { useState } from 'react';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import logo from '../images/logo-2.jpg'; // Import the logo image
import './Navbar.css'; // Ensure you import the CSS file

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = () => (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        {['Home', 'About', 'Contact, Shop'].map((text) => (
          <ListItem button key={text} component={RouterLink} to={text === 'Home' ? '/' : `/${text.toLowerCase()}`}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#800020' }}> {/* Burgundy color */}
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {['Home', 'About'].map((text) => (
                <Button
                  key={text}
                  color="inherit"
                  component={RouterLink}
                  to={text === 'Home' ? '/' : `/${text.toLowerCase()}`}
                >
                  {text}
                </Button>
              ))}
            </Box>
            <Box className="glowing-logo">
               <RouterLink to="/">
                <img src={logo} alt="Logo" className="logo" />
               </RouterLink>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {['Shop', 'Contact'].map((text) => (
                <Button
                  key={text}
                  color="inherit"
                  component={RouterLink}
                  to={`/${text.toLowerCase()}`}
                >
                  {text}
                </Button>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList()}
      </Drawer>
    </Box>
  );
};

export default Navbar;