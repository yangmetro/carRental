import React, { useState } from "react";

const PaymentForm = (props) => {
  const { handleSubmit } = this.props;

  const initialPayment = {
    payment_name: "",
    payment_type: "credit",
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
    handleSubmit();
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
        <select name="payment_type">
          <option value="credit">Credit</option>
          <option value="debit">Debit</option>
        </select>
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
          type="number"
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
