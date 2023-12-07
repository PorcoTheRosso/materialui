import React, { useState } from 'react';
import { Box, Card, CardContent, CardMedia, IconButton, Typography, Divider, Button } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import productimg from '../../assets/img/05.png'
const CartItem = ({ item }) => {
    const [quantity, setQuantity] = useState(1); // Placeholder for quantity management

    const handleDecreaseQuantity = () => {
        setQuantity(prev => Math.max(prev - 1, 0));
    };

    const handleIncreaseQuantity = () => {
        setQuantity(prev => prev + 1);
    };

    return (
        <Card sx={{ display: 'flex', marginBottom: 2, alignItems: 'center' }}>
            <CardMedia
                component="img"
                sx={{ width: 150, height: 150, objectFit: 'contain' }} // Set both width and height to make it box-shaped
                image={item.image} // Placeholder for item image
                alt={item.name} // Placeholder for item name
            />
            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1 }}>
                <Typography variant="h6">{item.price}</Typography> {/* Placeholder for item price */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton onClick={handleDecreaseQuantity} aria-label="reduce quantity">
                        <RemoveIcon />
                    </IconButton>
                    <Typography sx={{ margin: '0 10px' }}>{quantity}</Typography>
                    <IconButton onClick={handleIncreaseQuantity} aria-label="increase quantity">
                        <AddIcon />
                    </IconButton>
                </Box>
            </CardContent>
        </Card>
    );
};

const Cart = () => {
    // Placeholder data, replace with real cart items
    const cartItems = [
        { id: 1, name: 'Item 1', price: '$100', image: productimg },
        // ... more items
    ];

    // Placeholder for total price calculation
    const totalPrice = 'Calculated Price'; 

    return (
        <Box>
            {cartItems.map(item => (
                <CartItem key={item.id} item={item} />
            ))}

            <Divider />

            <Box sx={{ padding: 2, display: 'flex', justifyContent: 'space-between' }}>
                <Typography>Total Price (excl VAT & Shipping):</Typography>
                <Typography>{totalPrice}</Typography>
            </Box>

            <Box sx={{ padding: 2 }}>
                <Button variant="contained" sx={{ width: '100%' }}>CHECKOUT</Button>
            </Box>
        </Box>
    );
};

export default Cart;
