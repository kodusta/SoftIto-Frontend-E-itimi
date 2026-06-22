import React, { createContext, useState, useContext } from "react";

const ReservationContext = createContext();

export const ReservationProvider = ({ children }) => {
  const [reservation, setReservation] = useState({
    service: null,
    doctor: null,
    date: "",
    time: "",
    patient: {
      name: "",
      email: "",
      phone: "",
      notes: ""
    },
    payment: {
      cardName: "",
      cardNumber: "",
      cardExpiry: "",
      cardCvc: ""
    }
  });

  const updateService = (service) => {
    setReservation((prev) => ({ ...prev, service }));
  };

  const updateDoctor = (doctor) => {
    setReservation((prev) => ({ ...prev, doctor }));
  };

  const updateDateTime = (date, time) => {
    setReservation((prev) => ({ ...prev, date, time }));
  };

  const updatePatient = (patient) => {
    setReservation((prev) => ({ ...prev, patient: { ...prev.patient, ...patient } }));
  };

  const updatePayment = (payment) => {
    setReservation((prev) => ({ ...prev, payment: { ...prev.payment, ...payment } }));
  };

  const resetReservation = () => {
    setReservation({
      service: null,
      doctor: null,
      date: "",
      time: "",
      patient: {
        name: "",
        email: "",
        phone: "",
        notes: ""
      },
      payment: {
        cardName: "",
        cardNumber: "",
        cardExpiry: "",
        cardCvc: ""
      }
    });
  };

  return (
    <ReservationContext.Provider
      value={{
        reservation,
        updateService,
        updateDoctor,
        updateDateTime,
        updatePatient,
        updatePayment,
        resetReservation
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
};

export const useReservation = () => {
  const context = useContext(ReservationContext);
  if (!context) {
    throw new Error("useReservation Provider icinde kullanilmalidir.");
  }
  return context;
};
