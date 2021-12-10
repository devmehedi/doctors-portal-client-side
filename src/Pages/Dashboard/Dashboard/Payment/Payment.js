import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51JwR6fAVceNIcpzbpqOrpyQJOA3JxYSQ3nZ0sgVvf7VL193NAaaF4ujB26p2DGnR5inDfbNpzE18IVmbwFDI4xdi00Jtl01TRt')

const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});
    useEffect(() => {
        fetch(` https://arcane-garden-73883.herokuapp.com/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data));
    }, [appointmentId])
    return (
        <div>
            <h2>Please Pay For: {appointment.patientName} for {appointment.serviceName} </h2>
            <h4>Pay: ${appointment.price} </h4>
            {appointment?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    appointment={appointment}
                />
            </Elements>}
        </div>
    );
};

export default Payment;