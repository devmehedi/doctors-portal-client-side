import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        price: 20,
        space: 10,
    },
    {
        id: 2,
        name: 'Teeth Orthodonics',
        time: '09.00 AM - 10.00 AM',
        price: 25,
        space: 7,
    },
    {
        id: 3,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        price: 30,
        space: 8,
    },
    {
        id: 4,
        name: 'Teeth Orthodonics',
        time: '10.00 AM - 11.00 AM',
        price: 35,
        space: 6,
    },
    {
        id: 5,
        name: 'Teeth Orthodonics',
        time: '11.00 AM - 12.00 PM',
        price: 40,
        space: 5,
    },
    {
        id: 6,
        name: 'Teeth Orthodonics',
        time: '05.00 PM - 06.00 PM',
        price: 22,
        space: 3,
    },
    {
        id: 7,
        name: 'Teeth Orthodonics',
        time: '06.00 PM - 07.00 PM',
        price: 15,
        space: 9,
    },
    {
        id: 8,
        name: 'Teeth Orthodonics',
        time: '07.00 PM - 08.00 PM',
        price: 37,
        space: 12,
    },
    {
        id: 9,
        name: 'Teeth Orthodonics',
        time: '08.00 PM - 09.00 PM',
        price: 42,
        space: 6,
    },
    {
        id: 10,
        name: 'Teeth Orthodonics',
        time: '09.00 PM - 10.00 PM',
        price: 50,
        space: 14,
    }
]


const AvailableAppointments = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <Container>
            <Typography variant="h4" sx={{ color: 'info.main', mb: 3 }}>Available Appointments On {date.toDateString()}</Typography>
            {bookingSuccess && <Alert severity="success">Appointment Booking Successfully!</Alert>}
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;