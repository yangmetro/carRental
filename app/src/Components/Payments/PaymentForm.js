import React, { useState } from "react";

const PaymentForm = (props) => {
  const { handleSubmit } = props;

  // Initial State
  const initialPayment = {
    payment_name: "",
    payment_type: "",
    card_number: "",
    expiry_date: "",
  };

  const [payment, setPayment] = useState(initialPayment);

  const { payment_name, payment_type, card_number, expiry_date } = payment;

  const onChange = (e) => {
    setPayment({ ...payment, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(payment);
    setPayment({});
  };

  return (
    <div>
      <h1>Add New Payment</h1>
      <form onSubmit={onSubmit}>
        <input
          className="formInput"
          name="payment_name"
          type="text"
          placeholder="Payment Name"
          value={payment_name}
          onChange={onChange}
          required
        />
        <input
          className="formInput"
          name="payment_type"
          type="text"
          placeholder="Payment Type"
          value={payment_type}
          onChange={onChange}
          required
        />
        <input
          className="formInput"
          name="card_number"
          type="text"
          placeholder="Card Number"
          value={card_number}
          onChange={onChange}
          required
        />
        <input
          className="formInput"
          name="expiry_date"
          type="date"
          placeholder="Expiration"
          value={expiry_date}
          onChange={onChange}
          required
        />
        <div>
          <input className="submitButton" type="submit" value="Save Payment" />
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
