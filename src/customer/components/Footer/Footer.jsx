import React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

function Footer() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            <Grid
                container
                justifyContent="space-evenly"
                sx={{ bgcolor: 'black', color: 'white', py: 5 }}
            >
                <Grid item xs={12} sm={6} md={2}>
                    <Typography variant="h6" gutterBottom>Company</Typography>
                    <Button sx={{ display: 'block', color: 'white', textTransform: 'none', mb: 1 }}>About</Button>
                    <Button sx={{ display: 'block', color: 'white', textTransform: 'none', mb: 1 }}>Blog</Button>
                    <Button sx={{ display: 'block', color: 'white', textTransform: 'none', mb: 1 }}>Jobs</Button>
                    <Button sx={{ display: 'block', color: 'white', textTransform: 'none', mb: 1 }}>Partners</Button>
                </Grid>

                <Grid item xs={12} sm={6} md={2}>
                    <Typography variant="h6" gutterBottom>Products</Typography>
                    <Button sx={{ display: 'block', color: 'white', textTransform: 'none', mb: 1 }}>Pricing</Button>
                    <Button sx={{ display: 'block', color: 'white', textTransform: 'none', mb: 1 }}>Features</Button>
                    <Button sx={{ display: 'block', color: 'white', textTransform: 'none', mb: 1 }}>Integrations</Button>
                    <Button sx={{ display: 'block', color: 'white', textTransform: 'none', mb: 1 }}>Demo</Button>
                </Grid>

                <Grid item xs={12} sm={6} md={2}>
                    <Typography variant="h6" gutterBottom>Resources</Typography>
                    <Button sx={{ display: 'block', color: 'white', textTransform: 'none', mb: 1 }}>Docs</Button>
                    <Button sx={{ display: 'block', color: 'white', textTransform: 'none', mb: 1 }}>Tutorials</Button>
                    <Button sx={{ display: 'block', color: 'white', textTransform: 'none', mb: 1 }}>Support</Button>
                    <Button sx={{ display: 'block', color: 'white', textTransform: 'none', mb: 1 }}>Community</Button>
                </Grid>

                <Grid item xs={12} sm={6} md={2}>
                    <Typography variant="h6" gutterBottom>Contact</Typography>
                    <Button sx={{ display: 'block', color: 'white', textTransform: 'none', mb: 1 }}>Help Center</Button>
                    <Button sx={{ display: 'block', color: 'white', textTransform: 'none', mb: 1 }}>Email</Button>
                    <Button sx={{ display: 'block', color: 'white', textTransform: 'none', mb: 1 }}>Live Chat</Button>
                    <Button sx={{ display: 'block', color: 'white', textTransform: 'none', mb: 1 }}>FAQ</Button>
                </Grid>
            </Grid>

            {/* Bottom copyright row */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
            >
                <Grid container justifyContent="center" sx={{ bgcolor: 'black', color: 'white', py: 2 }}>
                    <Grid item>
                        <Typography variant="body2" align="center">
                            © {new Date().getFullYear()} All rights reserved. Made by SNR.
                        </Typography>
                    </Grid>
                </Grid>
            </motion.div>
        </motion.div>
    );
}

export default Footer;
