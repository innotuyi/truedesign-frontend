import React, { useState } from 'react';

const PaymentProcess = () => {
  const [step, setStep] = useState(1);
  const [cart, setCart] = useState([]);
  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    address: '',
    city: '',
    zipCode: '',
  });

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  const handleRemoveFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  const handleConfirmOrder = () => {
    // Here, you would typically send the order details to your backend for processing.
    // This is a simplified example without actual payment processing.
    console.log('Order Confirmed:', { cart, shippingInfo });
  };

  return (
    <div className="container mt-5">
      {step === 1 && (
        <div>
          <h2>Step 1: Add to Cart</h2>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
                <button onClick={() => handleRemoveFromCart(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <button onClick={() => handleNextStep()}>Proceed to Checkout</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>Step 2: Shipping Information</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                name="fullName"
                value={shippingInfo.fullName}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                value={shippingInfo.address}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="city" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="city"
                name="city"
                value={shippingInfo.city}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="zipCode" className="form-label">
                Zip Code
              </label>
              <input
                type="text"
                className="form-control"
                id="zipCode"
                name="zipCode"
                value={shippingInfo.zipCode}
                onChange={handleInputChange}
              />
            </div>
            <button type="button" onClick={() => handlePreviousStep()}>
              Previous
            </button>
            <button type="button" onClick={() => handleNextStep()}>
              Next
            </button>
          </form>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2>Step 3: Confirm Order</h2>
          <div>
            <h4>Items in Cart:</h4>
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  {item.name} - ${item.price}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Shipping Information:</h4>
            <p>Full Name: {shippingInfo.fullName}</p>
            <p>Address: {shippingInfo.address}</p>
            <p>City: {shippingInfo.city}</p>
            <p>Zip Code: {shippingInfo.zipCode}</p>
          </div>
          <button onClick={() => handleConfirmOrder()}>Confirm Order</button>
          <button onClick={() => handlePreviousStep()}>Previous</button>
        </div>
      )}
    </div>
  );
};

export default PaymentProcess;
