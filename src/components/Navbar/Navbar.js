import React, { useState } from 'react'; // Import useState here
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logoImage from '../../assets/img/logo-asset-01.png';
import Cart from '../Cart/Cart';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Popover from '@mui/material/Popover';



const Navbar = () => {




    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleToggleCart = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    
    const handleCloseCart = () => {
        setAnchorEl(null);
    };
    
    const isPopoverOpen = Boolean(anchorEl);
    
    return (
        <Grid item xs={12}>
           <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }}>

                <Container maxWidth="xxl">
                    <Toolbar disableGutters>
                    <Box sx={{ position: 'absolute', left: '0%', top: '100%', transform: 'translateY(-50%)'  }}>
              <img src={logoImage} alt="Logo" style={{ height: '120px' }} /> {/* Adjust height as needed */}
            
            </Box>
                         {/* Right-aligned container for "Track Shipping" and Cart Icon */}
                         <Box sx={{ display: 'flex', flexGrow: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
    {/* Clickable Track Shipping Label */}
    <Button
        key="Track Shipping"
        onClick={() => { /* handle your click event here */ }}
        sx={{ 
            my: 2, 
            color: 'black', 
            display: 'block', 
            mr: 8,
            backgroundColor: 'transparent', // Make background transparent
            boxShadow: 'none', // Remove shadow
            '&:hover': {
                backgroundColor: 'transparent', // Keep background transparent on hover
                boxShadow: 'none' // Remove shadow on hover
            },
            //textTransform: 'none', // Optional: prevent uppercase text
            border: 'none' // Remove border
        }}
    >
        Track Shipping
    </Button>

                            {/* Cart Icon */}
                            <ClickAwayListener onClickAway={handleCloseCart}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Tooltip title="Open Cart">
                                    <IconButton onClick={handleToggleCart} sx={{ p: 0, color: 'black' }}>

                                            <ShoppingCartIcon />
                                        </IconButton>
                                    </Tooltip>
                                    
        {/* Popover for Cart */}
        <Popover
            open={isPopoverOpen}
            anchorEl={anchorEl}
            onClose={handleCloseCart}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
        >
            <Cart /> {/* Render your Cart component inside the Popover */}
        </Popover>
                                </Box>
                            </ClickAwayListener>

                        </Box>
                </Toolbar>
            </Container>
        </AppBar>

      </Grid>
    );
  }
export default Navbar