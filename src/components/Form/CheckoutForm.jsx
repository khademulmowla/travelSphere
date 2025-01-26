
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

import './CheckoutForm.css';
import Button from '../Shared/Button/Button';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const CheckoutForm = ({ closeModal, refetch, bookingData }) => {
    const { price, _id, userName, userEmail } = bookingData || {};
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (_id) {
            axiosSecure.post('/create-payment-intent', { packageId: _id })
                .then(({ data }) => setClientSecret(data.clientSecret))
                .catch(err => setError(err.message));
        }
    }, [_id, axiosSecure]);


    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return
        }
        const card = elements.getElement(CardElement)

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })
        if (error) {
            return console.log('[error]', error)
        } else {
            console.log('[PaymentMethod]', paymentMethod)
        }
        // confirm payment
        const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: userName,
                    email: userEmail,
                },
            },
        })
        if (paymentIntent.status === 'succeeded') {
            try {
                // Update existing booking with transactionId
                await axiosSecure.patch(`/books/${_id}`, {
                    transactionId: paymentIntent.id,
                });
                toast.success('Payment Successful! Booking is now in review.');
                refetch()
                // navigate('/dashboard/my-orders')
            } catch (err) {
                console.log(err)
            } finally {
                // setProcessing(false)
                closeModal()
            }
        }

        setLoading(false);
        if (error) {
            setError(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement className='p-2 border rounded' />
            {error && <p className='text-red-500'>{error}</p>}
            <div className='flex justify-around mt-2 gap-2'>
                <Button type='submit' disabled={!stripe || loading} label={loading ? 'Processing...' : `Pay $${price}`} />
                <Button outline onClick={closeModal} label='Cancel' />
            </div>
        </form>
    );
};
export default CheckoutForm;
