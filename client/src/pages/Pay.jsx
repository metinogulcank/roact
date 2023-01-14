import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";
import axios from "axios";

const KEY =
  "pk_test_51MDSEtAv9hrWuGpOzFW8It3rDrJj3zxg184Oxr45PPdgeFCBVJErIxk4NfoAnPXf2xiQRumQCf2Rw7zK9w95rW0G00veKUh4Y6";

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "https://localhost:5000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
  }, [stripeToken]);
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StripeCheckout
        name="Roact"
        image="https://github.com/<metinogulcank>.png"
        billingAddress
        shippingAddress
        description="Toplam Ödeme 20₺"
        amount={2000}
        token={onToken}
        stripeKey={KEY}
      >
        <button
          style={{
            border: "none",
            width: 120,
            borderRadius: 5,
            padding: "20px",
            backgroundColor: "black",
            color: "white",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Şimdi Öde
        </button>
      </StripeCheckout>
    </div>
  );
};

export default Pay;
