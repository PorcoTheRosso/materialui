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

function App() {
  const [value, setValue] = React.useState(0);

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center" > {/* Full height and centered items */}
      <Grid item xs={12}>
        <Navbar />
      </Grid>

      <Grid item xs={12}>
        <Modelviewer />
      </Grid>

      <Grid item>
        <Button variant="outlined">AR VIEW</Button>
      </Grid>

      <Grid item>
        <Button variant="contained">BUY</Button>
      </Grid>

      <Grid item xs={12}>
        <Productviewer />
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
    </Grid>
  );
}

export default App;
