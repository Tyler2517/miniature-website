// src/components/Footer.tsx
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#333', color: '#fff', padding: '20px', marginTop: 'auto' }}>
      <Typography variant="body2" align="center">
        Company Address: 1234 Main St, Anytown, USA
      </Typography>
      <Typography variant="body2" align="center">
        Phone: (123) 456-7890
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        {['Home', 'About', 'Shop', 'Contact'].map((text) => (
          <Button
            key={text}
            color="inherit"
            component={RouterLink}
            to={text === 'Home' ? '/' : `/${text.toLowerCase()}`}
            sx={{ color: '#fff', textTransform: 'none', mx: 1 }}
          >
            {text}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Footer;