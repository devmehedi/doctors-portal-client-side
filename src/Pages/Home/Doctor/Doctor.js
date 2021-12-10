import { Grid, Typography } from '@mui/material';
import React from 'react';

const Doctor = ({ doctor }) => {
    const { name, image } = doctor;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <img style={{ width: '200px', height: '200px' }}
                src={`data:image/jpeg;base64,${image}`} alt="" />
            <Typography>
                <h3> {name} </h3>
            </Typography>
        </Grid>
    );
};

export default Doctor;