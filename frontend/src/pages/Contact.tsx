// src/pages/Contact.tsx
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Contact: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Contact Page
      </Typography>
      <Typography variant="body1">
        Get in touch with us through this page.
      </Typography>
    </Box>
  );
};

export default Contact;