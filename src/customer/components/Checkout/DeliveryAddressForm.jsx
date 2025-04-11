import React from 'react';
import { Grid, Button, Box, TextField } from '@mui/material';
import AddressCard from '../AddressCard/AddressCard';

function DeliveryAddressForm() {

    const handleSubmit=(e)=>{
        e.preventDefault();
        
        const data = new FormData(e.currentTarget);

        const address = {
            firstName:data.get('firstName'),
            lastName:data.get("lastName"),
            streetAddress:data.get("address"),
            city:data.get("city"),
            state:data.get("state"),
            zipCode:data.get("zip"),
            mobile:data.get("phonenumber")


        }
        console.log("address",address);

    }
    return (
        <Box sx={{ display: 'flex', gap: 2, width: '100%' }}>

            {/* Left Side - Address Section */}
            <Box
                sx={{
                    width: '40%',
                    height: '30.5rem',
                    overflowY: 'scroll',
                    border: '1px solid #ccc',
                    borderRadius: '12px',
                    boxShadow: 2,
                }}
            >
                <Box sx={{ p: 3, borderBottom: '1px solid #eee' }}>
                    <AddressCard />
                    <Button
                        sx={{ mt: 2, bgcolor: 'rgb(145, 85, 253)' }}
                        size="large"
                        variant="contained"
                        fullWidth
                    >
                        Deliver Here
                    </Button>
                </Box>
            </Box>

            {/* Right Side - Form Section */}
            <Box
                sx={{
                    width: '60%',
                    border: '1px solid #ccc',
                    borderRadius: '12px',
                    boxShadow: 2,
                    p: 3,
                }}
            >
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {/* First Name | Last Name */}
                        <Grid item xs={6}>
                            <TextField
                                required
                                label="First Name"
                                name="firstName"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                label="Last Name"
                                name="lastName"
                                fullWidth
                            />
                        </Grid>

                        {/* Address (full width) */}
                        <Grid item xs={12}>
                            <TextField
                                required
                                label="Address"
                                name="address"
                                fullWidth
                                multiline
                                rows={4}
                            />
                        </Grid>

                        {/* City | State | Zip | Phone */}
                        <Grid item xs={3}>
                            <TextField
                                required
                                label="City"
                                name="city"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                required
                                label="State"
                                name="state"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                required
                                label="Zip Code"
                                name="zip"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                required
                                label="Phone Number"
                                name="phonenumber"
                                fullWidth
                            />
                        </Grid>

                        {/* Deliver Button */}
                        <Grid item xs={12}>
                            <Button
                                sx={{ mt: 2, bgcolor: 'rgb(145, 85, 253)' }}
                                size="large"
                                variant="contained"
                                fullWidth
                                type="submit"
                            >
                                Deliver Here
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Box>
    );
}

export default DeliveryAddressForm;
