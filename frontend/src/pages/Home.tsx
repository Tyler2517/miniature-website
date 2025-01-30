// src/pages/Home.tsx
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Slider from 'react-slick';
import { Link as RouterLink } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: 'black',
      }}
    >
      <Slider {...settings}>
        <Box>
          <img src="/src/images/people.jpg" alt="People Playing" style={{ width: '100%', height: '100vh', objectFit: 'cover' }} />
        </Box>
        <Box>
          <img src="/src/images/bolt_action.jpg" alt="Bolt Action" style={{ width: '100%', height: '100vh', objectFit: 'cover' }} />
        </Box>
        <Box>
          <img src="/src/images/conquest.jpg" alt="Conquest Game" style={{ width: '100%', height: '100vh', objectFit: 'cover' }} />
        </Box>
      </Slider>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          color: 'white',
          textAlign: 'center',
          background: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        <Typography variant="h2" sx={{ mb: 2, fontWeight: 'bold' }}>
          Welcome to Miniature Manager Hobbies & Games
        </Typography>
        <Typography variant="h5" sx={{ mb: 4 }}>
          Your one-stop shop for all hobby supplies and gaming needs!
        </Typography>
        <Box>
          <Button
            variant="contained"
            sx={{ mr: 2, backgroundColor: '#800020', '&:hover': { backgroundColor: '#660017' } }}
            size="large"
            LinkComponent={RouterLink}
            to="/shop"
          >
            Shop Now
          </Button>
          <Button
            variant="outlined"
            sx={{ color: 'white', borderColor: 'white', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}
            size="large"
            component={RouterLink}
            to="/about"
          >
            Learn More
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;