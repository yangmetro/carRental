import React, { useEffect, useState } from "react";

import Payment from "./Payment";
import PaymentForm from "./PaymentForm";

import "./PaymentStyles.css";

const Payments = () => {
  const addPayment = () => {
    // Post request
  };

  const updatePayment = () => {
    // Put request
  };

  const deletePayments = () => {
    // Delete request
  };

  useEffect(() => {
    // Get request
  }, []);

  // State
  const [payments, setPayments] = useState([]); // Payments state
  return (
    <div className="payments-container">
      <Payment />
      <button className="submitButton">Add New Payment</button>
    </div>
  );
};

export default Payments;
