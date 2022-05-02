import React, { useEffect, useState } from "react";
import axios from "axios";

import Payment from "./Payment";
import PaymentForm from "./PaymentForm";

import "./PaymentStyles.css";

const Payments = () => {
  // State
  const [payments, setPayments] = useState([]); // Payments state
  const [showForm, setShowForm] = useState(false);

  const addPayment = async (payment) => {
    let res = await axios.post("http://localhost:3001/api/payments", payment);
    setPayments([...payments, payment]);
  };

  const updatePayment = () => {
    // Put request
  };

  const deletePayments = () => {
    // Delete request
  };

  useEffect(() => {
    async function fetchData() {
      let res = await axios.get("http://localhost:3001/api/payments");
      setPayments(res.data);
    }
    fetchData();
  }, []);

  return (
    <div className="payments-container">
      {payments.map((p) => {
        return (
          <Payment
            key={p.payment_id}
            name="Payment"
            payment_type={p.payment_type}
            card_number={p.card_number}
            expiry_date={p.expiry_date}
          />
        );
      })}
      {showForm && (
        <PaymentForm submitLabel="Save payment" handleSubmit={addPayment} />
      )}
      {!showForm && <button className="submitButton">Add New Payment</button>}
    </div>
  );
};

export default Payments;
