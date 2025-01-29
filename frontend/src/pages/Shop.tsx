import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Shop: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Shop Page
      </Typography>
      <Typography variant="body1">
        Welcome to the shop page!
        Here's is the link to the store:
        <a href="https://www.theminiaturemanager.com">https://www.theminiaturemanager.com</a>
      </Typography>
    </Box>
  );
};

export default Shop;