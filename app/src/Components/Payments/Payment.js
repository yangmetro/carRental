import React from "react";
import moment from 'moment';

import "./PaymentStyles.css";

const Payment = (props) => {
  const { name, payment_type, card_number, expiry_date } = props;
  return (
    <div className="payment">
      <h1>{name}</h1>
      <h4>{card_number}</h4>
      <br></br>
      <h2>Type: {payment_type}</h2>
      <h2>Expiration: {moment(expiry_date).format("MMMM Do YYYY")}</h2>
    </div>
  );
};

export default Payment;
