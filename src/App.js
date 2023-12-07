import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Grid from '@mui/material/Unstable_Grid2';
import Modelviewer from './components/Modelviewer/Modelviewer';
import Button from '@mui/material/Button';
import Productviewer from './components/Productviewer/Productviewer';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import './index.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';


// Create a theme instance.
const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        // This will apply to both variant="outlined" and variant="contained"
        root: {
          backgroundColor: 'black', // For contained button
          color: 'white',
          borderColor: 'black', // For outlined button
        },
      },
    },
  },
});

function App() {
  const [value, setValue] = React.useState(0);

  return (
    <ThemeProvider theme={theme}>
    <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ height: '100vh' }}> {/* Set container height */}
      <Grid item xs={12}>
        <Navbar />
      </Grid>

      <Grid item xs={12}>
        <Modelviewer />
      </Grid>


      <Grid item>
    <Button
        variant="outlined"
        sx={{ 
            backgroundColor: 'transparent', // Make background transparent
            boxShadow: 'none', // Remove shadow
            '&:hover': {
                backgroundColor: 'transparent', // Keep background transparent on hover
                boxShadow: 'none' // Remove shadow on hover
            },
            border: 'none', // Remove border
        }}
        onClick={() => { /* handle your click event here */ }}
    >
        <Typography
            variant="body1"
            sx={{ color: 'black', textTransform: 'none' }}
        >
            PRICE
        </Typography>
    </Button>
</Grid>


      <Grid item>
        <Button variant="contained">BUY</Button>
      </Grid>

      <Grid item xs={12}>
        <Box sx={{ width: 500, margin: 'auto' }}> {/* Centered box */}
        <BottomNavigation
  showLabels
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
  style={{ backgroundColor: 'white', color: 'black' }} // Change background and text color
>
  <BottomNavigationAction 
    icon={<ChevronLeftIcon style={{ fontSize: 'large' }} />} // Increase icon size
    style={{ fontSize: '1rem' }} // Increase label text size
  />
  <BottomNavigationAction 
    label="Product Name" 
    style={{ fontSize: '1rem' }}
  />
  <BottomNavigationAction 
    icon={<ChevronRightIcon style={{ fontSize: 'large' }} />} 
    style={{ fontSize: '1rem' }}
  />
</BottomNavigation>

        </Box>
      </Grid>

      <Grid item xs={12} sx={{ pt: 2 }}>
        <Productviewer />
      </Grid>

      
    </Grid>
    </ThemeProvider>
  );
}

export default App;
