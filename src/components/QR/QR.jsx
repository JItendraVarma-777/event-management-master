import StripeCheckout from 'react-stripe-checkout';
import React, { useState } from 'react';
var QRCode = require('qrcode.react');

function QR({ data }) {
  const priceForStripe = data?.price * 100;
  const publishableKey =
    'pk_test_51Ht8t0AUGh2stU4g2NhzjhmzwmSJ6Mt3ghnJAbE6L6xGm0BpbgVQaids6bI9ZboSENHhYe87U2VVsai87mR3QdeJ00VoxGi0Ho';
  const onToken = () => {
    setPayment(true);
  };
  console.log(data);

  const [payment, setPayment] = useState(false);
  const downloadQR = () => {
    const canvas = document.getElementById('eventpass');
    const pngUrl = canvas
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream');
    let downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = `${data.firstName + '_' + data.lastName}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '5%' }} className="payment">
      {!payment ? (
        <div className="container d-flex justify-content-center">
          <div
            className="card d-flex justify-content-center align-items-center"
            style={{ width: '30rem' }}
          >
            <h3 className="alert alert-success w-100">
              {' '}
              <i class="fas fa-check-circle"></i> Thank you for your purchase!
            </h3>
            <QRCode
              id="eventpass"
              value={JSON.stringify(data)}
              size={290}
              level={'H'}
              includeMargin={true}
              className=""
            />{' '}
            <button className="btn btn-outline-success" onClick={downloadQR}>
              {' '}
              Download QR{' '}
            </button>
            <div className="card-body">
              <hr />
              <img
                src="https://cdn.pixabay.com/photo/2020/04/10/13/23/paid-5025785_960_720.png"
                alt="paid"
                className="ticket-stamp"
              />
              {/* <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p> */}
            </div>
          </div>
        </div>
      ) : (
        <div
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ height: '50vh' }}
        >
          <StripeCheckout
            label="Make Payment"
            name="CulturoFestO ltd."
            billingAddress
            shippingAddress
            description={`Your total is ${data?.price}.00`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
          ></StripeCheckout>
          <p className="text-white mt-3">
            <i class="fas fa-lock"></i> By clicking "Make Payment" you agree to
            the terms and conditions.
          </p>
        </div>
      )}
    </div>
  );
}

export default QR;
