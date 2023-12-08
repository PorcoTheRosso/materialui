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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import bgvideo from './assets/img/bg_animation.gif';


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
          '&:hover': { // Style for hover state
            backgroundColor: 'darkgrey', // Dark grey color on hover
            // If you want to change for outlined button specifically, add another rule
          },
        },
      },
    },

    
  },
});

function App() {
  const [value, setValue] = React.useState(0);
  
  

  
  return (
    <ThemeProvider theme={theme}>
    <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ height: '100vh', position: 'relative' }}> {/* Set container height */}
        {/* Background GIF */}
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundImage: `url(${bgvideo})`,
          backgroundSize: 'cover',
          zIndex: -1
        }} />
      <Grid item xs={12}>
        <Navbar />
      </Grid>

      <Grid item xs={12}>
        <Modelviewer />
      </Grid>


      <Grid item>
    <Button
        variant="contained"
        sx={{ 
            backgroundColor: 'white', // Make background transparent
            boxShadow: 'none', // Remove shadow
            '&:hover': {
                backgroundColor: 'white', // Keep background transparent on hover
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
        <Box sx={{ width: 500, margin: 'auto', overflow: 'hidden', borderRadius: '10px' }}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            sx={{
                backgroundColor: 'white', 
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)', // Box shadow added here
                '& .MuiBottomNavigationAction-root': { // Increase specificity
                    color: 'black !important', // Ensuring color override
                    marginX: 1, // Apply horizontal margin
                    '&.Mui-selected': { // Targeting the selected state
                        color: 'black !important',
                    }
                }
            }}
          >
            <BottomNavigationAction 
                icon={<ChevronLeftIcon />} 
            />
            <BottomNavigationAction 
                label="Product Name" 
            />
            <BottomNavigationAction 
                icon={<ChevronRightIcon />} 
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
