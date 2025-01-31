import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    try {
      await emailjs.sendForm('service_w0lq3d5', 'template_xwdr4qq', form, 'mWY6B6HhxHDTFiKqr');
      alert('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email.');
    }
  };

  return (
    <Box sx={{
      padding: '20px',
      maxWidth: '800px',
      margin: '20px auto',
      backgroundColor: '#f5f5f5', // Light background color
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    }}>
      <Typography variant="h4" gutterBottom>
        Contact Page
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="from_name"
          value={formData.from_name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          fullWidth
          multiline
          rows={4}
          margin="normal"
          required
        />
        <Button
          type="submit"
          variant="contained"
          style={{ backgroundColor: '#800020', color: '#fff' }} // Burgundy color
        >
          Send
        </Button>
      </form>
    </Box>
  );
};

export default Contact;