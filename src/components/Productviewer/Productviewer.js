import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Grid } from '@mui/material';
import imgsrc from '../../assets/img/05.png';

const Productviewer = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" spacing={1}>
      {Array.from({ length: 9 }, (_, index) => (
        <Grid item xs={1} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card sx={{ width: '100%', height: '100%' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="100%"
                image={imgsrc}
                alt={`Card ${index + 1}`}
              />
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Productviewer;
