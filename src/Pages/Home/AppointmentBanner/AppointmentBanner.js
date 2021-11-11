import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';

//Background image niye ashar way
const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(64,72,90)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175
}


const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: '400px', marginTop: '-110px' }}
                        src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex', justifyContent: 'flex-start',
                    textAlign: 'left',
                    alignItems: 'center'
                }}>
                    <Box >
                        <Typography variant="h6" sx={{ mb: 5 }} style={{ color: '#1abc9c' }}>
                            Appointment
                        </Typography>
                        <Typography variant="h4" style={{ color: 'white', fontWeight: 600 }}>
                            Make An Appointment Today
                        </Typography>
                        <Typography variant="h6" sx={{ my: 5 }} style={{ color: 'white', fontSize: '14px', fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia ipsa deleniti eum doloremque quos? Ut possimus magnam odio dignissimos reiciendis.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#1abc9c' }}>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;