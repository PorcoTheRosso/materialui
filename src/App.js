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

function App() {
  const [value, setValue] = React.useState(0);

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ height: '100vh' }}> {/* Set container height */}
      <Grid item xs={12}>
        <Navbar />
      </Grid>

      <Grid item xs={12}>
        <Modelviewer />
      </Grid>


      <Grid item>
        <Button variant="outlined">PRICE</Button>
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
          >
            <BottomNavigationAction label="" icon={<ChevronLeftIcon />} />
            <BottomNavigationAction label="Product Name" />
            <BottomNavigationAction label="" icon={<ChevronRightIcon />} />
          </BottomNavigation>
        </Box>
      </Grid>

      <Grid item xs={12} sx={{ pt: 2 }}>
        <Productviewer />
      </Grid>

      
    </Grid>
  );
}

export default App;
