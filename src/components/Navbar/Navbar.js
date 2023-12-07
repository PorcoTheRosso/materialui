import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';

import Container from '@mui/material/Container';
// Removed unused Avatar import
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logoImage from '../../assets/img/logo-asset-01.png';

const settings = ['ITEM1', 'ITEM2', 'ITEM3', 'ITEM4']; // Define settings if needed

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  

    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    return (
        <Grid item xs={12}>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                    <Box sx={{ position: 'absolute', left: '0%', top: '130%', transform: 'translateY(-50%)'  }}>
              <img src={logoImage} alt="Logo" style={{ height: '170px' }} /> {/* Adjust height as needed */}
            </Box>
  
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>

                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <MenuItem key="Track Shipping" onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">Track Shipping</Typography>
                                </MenuItem>
                            </Menu>
                        </Box>

                      


                        <Box sx={{ flexGrow: 1 }}>
                         
                          </Box>

                        <Button
                            key="Track Shipping"
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block', mr: 8 }}
                        >
                            Track Shipping
                        </Button>

                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Tooltip title="Open Cart">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <ShoppingCartIcon />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      </Grid>
    );
  }
export default Navbar