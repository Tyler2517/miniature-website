// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import the Footer component
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Events from './pages/Events'; // Import the Events component
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const App: React.FC = () => {
  return (
    <Router basename="/miniature-website">
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <Container sx={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </Container>        <Footer />
      </Box>
    </Router>
  );
};

export default App;