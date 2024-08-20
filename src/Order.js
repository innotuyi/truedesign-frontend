import React, { useState } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { ToastContainer, toast } from "react-toastify";

const Order = () => {
  const [orderItem, setOrderItem] = useState('');
  const [orderQuantity, setOrderQuantity] = useState('');
  const [orderDescription, setOrderDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your WhatsApp number in international format without +
    const phoneNumber = '250785530789';  // Replace with your WhatsApp number

    // Create the WhatsApp message with the form data
    const message = `Order Details:\nItem: ${orderItem}\nQuantity: ${orderQuantity}\nDescription: ${orderDescription}`;

    // WhatsApp URL format with phone number and pre-filled message
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    // Open WhatsApp with the pre-filled message
    window.open(whatsappUrl, '_blank');
    
    toast.success("Redirecting to WhatsApp...");
  }

  return (
    <>
      <Nav />
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 offset-md-3 bg-light justify-content-center text-center">
              <h2 className="pt-5">Place Your Order</h2>
              <form onSubmit={handleSubmit}>
              <ToastContainer
                    position="bottom-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                  />

                <div className="mb-3">
                  <label htmlFor="orderItem" className="form-label">Order Item</label>
                  <input
                    type="text"
                    className="form-control"
                    id="orderItem"
                    value={orderItem}
                    onChange={(e) => setOrderItem(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="orderQuantity" className="form-label">Order Quantity</label>
                  <input
                    type="number"
                    className="form-control"
                    id="orderQuantity"
                    value={orderQuantity}
                    onChange={(e) => setOrderQuantity(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="orderDescription" className="form-label">Order Description</label>
                  <textarea
                    className="form-control"
                    id="orderDescription"
                    rows="4"
                    value={orderDescription}
                    onChange={(e) => setOrderDescription(e.target.value)}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit Order</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Order;
