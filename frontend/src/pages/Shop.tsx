// src/pages/Home.tsx
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Home: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Shop Page
      </Typography>
      <Typography variant="body1">
        Welcome to the shop page!
      </Typography>
    </Box>
  );
};

export default Home;