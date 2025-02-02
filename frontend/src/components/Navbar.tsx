import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import logo from '../images/logo-2.png'; // Import the logo image

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
        {['Home', 'Contact', 'Shop', 'Events'].map((text, index) => (
          <ListItem key={index} component={RouterLink} to={text === 'Home' ? '/' : `/${text.toLowerCase()}`}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: '#800020' }}>
      <Toolbar>
        {isMobile ? (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          // Left side links for desktop
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-start' }}>
            {['Home', 'Events'].map((text, index) => (
              <Button key={index} color="inherit" component={RouterLink} to={text === 'Home' ? '/' : `/${text.toLowerCase()}`}>{text}</Button>
            ))}
          </Box>
        )}
        {/* Centered logo for all views */}
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <RouterLink to="/">
            <Box component="img" src={logo} alt="Logo" sx={{ height: { xs: '30px', md: '50px' } }} />
          </RouterLink>
        </Box>
        {isMobile ? (
          // Placeholder box to balance the toolbar layout on mobile
          <Box sx={{ flexGrow: 1 }}></Box>
        ) : (
          // Right side links for desktop
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
            {['Shop', 'Contact'].map((text, index) => (
              <Button key={index} color="inherit" component={RouterLink} to={`/${text.toLowerCase()}`}>{text}</Button>
            ))}
          </Box>
        )}
      </Toolbar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList()}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;