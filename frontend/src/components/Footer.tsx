// src/components/Footer.tsx
import React from 'react';
import { Box, Typography, Button, IconButton, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import DiscordIcon from '../assets/DiscordIcon'; // Adjust the path as necessary

const Footer: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#333', color: '#fff', padding: '20px', marginTop: 'auto' }}>
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="body2" align="center">
            76 E 1st N, Rexburg, ID 83440
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            {['Home', 'About', 'Shop', 'Contact', 'Events'].map((text) => (
              <Button
                key={text}
                color="inherit"
                component={RouterLink}
                to={text === 'Home' ? '/' : `/${text.toLowerCase()}`}
                sx={{ color: '#fff', textTransform: 'none', mx: 0.5 }}
              >
                {text}
              </Button>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <IconButton
              color="inherit"
              href="https://www.facebook.com/theminiaturemanager/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#fff',
                fontSize: 32, // Adjust the font size as necessary
                '&:hover': {
                  color: '#4267B2', // Facebook brand color
                },
              }}
            >
              <FacebookIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.instagram.com/the_miniature_manager"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#fff',
                fontSize: 32, // Adjust the font size as necessary
                '&:hover': {
                  color: '#C13584', // Instagram brand color
                },
              }}
            >
              <InstagramIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.youtube.com/channel/UCeeXSPKGrqFVi9w34lmgiuQ"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#fff',
                fontSize: 32, // Adjust the font size as necessary
                '&:hover': {
                  color: '#FF0000', // YouTube brand color
                },
              }}
            >
              <YouTubeIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://discord.gg/Pw3D6YvZwe"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#fff',
                fontSize: 32, // Adjust the font size as necessary
                '&:hover': {
                  color: '#7289DA', // Discord brand color
                },
              }}
            >
              <DiscordIcon fontSize="inherit" />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ marginTop: '10px' }}>
            <Typography variant="body2" align="center" sx={{ marginBottom: '5px' }}>
              <strong>Schedule:</strong>
            </Typography>
            <Typography variant="body2" align="center">Mon - Thu: 3:00pm - 12:00am</Typography>
            <Typography variant="body2" align="center">Fri: 3:00pm - 1:00am</Typography>
            <Typography variant="body2" align="center">Sat: 12:00pm - 12:00am</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;