import React, { createContext, useState, useContext } from 'react';

const ReservationContext = createContext();

export const useReservation = () => useContext(ReservationContext);

export const ReservationProvider = ({ children }) => {
  const [booking, setBooking] = useState({
    service: null,
    stylist: null,
    date: '',
    time: '',
    customer: {
      name: '',
      email: '',
      phone: '',
      notes: ''
    },
    payment: {
      cardName: '',
      cardNumber: '',
      expiry: '',
      cvc: ''
    },
    status: 'idle'
  });

  const updateBooking = (fields) => {
    setBooking((prev) => ({
      ...prev,
      ...fields
    }));
  };

  const updateCustomer = (fields) => {
    setBooking((prev) => ({
      ...prev,
      customer: { ...prev.customer, ...fields }
    }));
  };

  const updatePayment = (fields) => {
    setBooking((prev) => ({
      ...prev,
      payment: { ...prev.payment, ...fields }
    }));
  };

  const resetBooking = () => {
    setBooking({
      service: null,
      stylist: null,
      date: '',
      time: '',
      customer: {
        name: '',
        email: '',
        phone: '',
        notes: ''
      },
      payment: {
        cardName: '',
        cardNumber: '',
        expiry: '',
        cvc: ''
      },
      status: 'idle'
    });
  };

  return (
    <ReservationContext.Provider value={{ booking, updateBooking, updateCustomer, updatePayment, resetBooking }}>
      {children}
    </ReservationContext.Provider>
  );
};
