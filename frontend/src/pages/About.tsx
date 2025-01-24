import React from 'react';
import { Box, Container, Typography, Paper, Grid, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

// Custom theme with a different font and burgundy color
const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif', // You can change this to any font you prefer
  },
  palette: {
    primary: {
      main: '#800020', // Burgundy color
    },
  },
});

const About: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" sx={{ mt: 4, pb: 8 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom align="center">
            About Us
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant="body1" align="center">
                Miniature Manager is a hobbies and games store with a passion to bring tabletop games to our larger community of Rexburg and surrounding areas.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" align="center">
                Come check us out! We host daily games and events, providing a fun and inclusive environment for gamers of all levels. Whether you're into board games, card games, or miniature wargaming, we have something for everyone.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" align="center">
                Join our community to meet fellow enthusiasts, participate in tournaments, and discover new games. We also offer workshops and painting sessions for those interested in the artistic side of miniature gaming.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" align="center">
                Our friendly staff are always on hand to offer advice and help you find the perfect game or accessory. We look forward to welcoming you to our store!
              </Typography>
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="center">
              <Button variant="contained" color="primary" size="large" component={RouterLink} to="/events">
                Visit Us Today
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default About;