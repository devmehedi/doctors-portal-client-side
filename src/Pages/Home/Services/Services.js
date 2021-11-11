import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';

import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png'


const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti officiis, blanditiis consequatur quo ullam, nesciunt, aspernatur asperiores quis vitae recusandae molestias at ea nisi excepturi quaerat? Temporibus quam rem ad.',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti officiis, blanditiis consequatur quo ullam, nesciunt, aspernatur asperiores quis vitae recusandae molestias at ea nisi excepturi quaerat? Temporibus quam rem ad.',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti officiis, blanditiis consequatur quo ullam, nesciunt, aspernatur asperiores quis vitae recusandae molestias at ea nisi excepturi quaerat? Temporibus quam rem ad.',
        img: whitening
    }
]


const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 'bold', m: 2, color: 'success.main' }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 'bold', m: 5 }} variant="h4" component="div">
                    SERVICES WE PROVIDE
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;