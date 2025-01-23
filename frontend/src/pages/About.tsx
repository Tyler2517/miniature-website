// src/pages/About.tsx
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const About: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        About Page
      </Typography>
      <Typography variant="body1">
        Learn more about us on this page.
      </Typography>
    </Box>
  );
};

export default About;