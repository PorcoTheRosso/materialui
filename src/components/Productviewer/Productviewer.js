import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Grid } from '@mui/material';
import imgsrc from '../../assets/img/05.png';
import '../../index.css';

const Productviewer = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const cardWidth = 150;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getNumberOfCards = () => {
    if (windowWidth >= 1280) return 9; // Desktop
    if (windowWidth >= 768) return 5;  // Tablet
    return 3;                          // Mobile
  };

  const numberOfCards = getNumberOfCards();

  return (
    <Grid container justifyContent="center" alignItems="center" spacing={2}>
      {Array.from({ length: numberOfCards }, (_, index) => (
        <Grid item xs={12 / numberOfCards} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
         <Card sx={{ width: cardWidth, height: 'auto', borderRadius: '50%' }}>
    <CardActionArea>
        <CardMedia
            component="img"
            image={imgsrc}
            alt={`Card ${index + 1}`}
            sx={{ height: 'auto', width: '100%', borderRadius: '50%' }}
        />
    </CardActionArea>
</Card>

        </Grid>
      ))}
    </Grid>
  );
};

export default Productviewer;
