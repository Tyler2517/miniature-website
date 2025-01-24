// src/pages/Events.tsx
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Events: React.FC = () => {
  return (
    <Box sx={{ padding: '20px', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Upcoming Events
      </Typography>
      <Typography variant="body1">
        Stay tuned for our upcoming events!
      </Typography>
    </Box>
  );
};

export default Events;