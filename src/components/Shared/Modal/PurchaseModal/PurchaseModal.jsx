/* eslint-disable react/prop-types */
import {
    Dialog,
    Transition,
    TransitionChild,
    DialogPanel,
    DialogTitle,
} from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import CheckoutForm from '../../../Form/CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)

const PurchaseModal = ({ closeModal, isOpen, bookingData, refetch }) => {
    const { packageName, price, guide, status, _id } = bookingData || {}



    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as='div' className='relative z-10' onClose={closeModal}>
                <TransitionChild
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black bg-opacity-25' />
                </TransitionChild>

                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                        <TransitionChild
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >
                            <DialogPanel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                                <DialogTitle
                                    as='h3'
                                    className='text-lg font-medium text-center leading-6 text-gray-900'
                                >
                                    Review Info Before Purchase
                                </DialogTitle>
                                <div className='mt-2'>
                                    <p className='text-sm text-gray-500'>PackageName: {packageName}</p>
                                </div>
                                <div className='mt-2'>
                                    <p className='text-sm text-gray-500'>GuideName: {guide}</p>
                                </div>
                                <div className='mt-2'>
                                    <p className='text-sm text-gray-500'>Price: $ {price}</p>
                                </div>
                                <Elements stripe={stripePromise}>
                                    <CheckoutForm closeModal={closeModal} refetch={refetch} bookingData={bookingData} />
                                </Elements>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default PurchaseModal