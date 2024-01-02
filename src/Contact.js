import React, { useState } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import axios from 'axios'
import config from './config'
import { ToastContainer, toast } from "react-toastify";


const APP_URL = config.apiUrl

const Contact = () => {
  // State for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      name,
      email,
      subject,
      message
    }
    axios
      .post(
        `${APP_URL}/api/create-contact`,
        payload
      )
      .then(function (response) {
        toast.success("Message submitted");
      })
      .catch(function (error) {
        console.log("Error response: ", error);
      });
  }
  return (
    <>
      <Nav/>
      <div className="container-xxl py-5">
        <div className="container px-lg-5">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div
                className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <h6 className="position-relative d-inline text-primary ps-4">Contact Us</h6>
                <h2 className="mt-2">Contact For Any Query</h2>
              </div>
              <div className="wow fadeInUp" data-wow-delay="0.3s">
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

                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Your Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          placeholder="Subject"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                        />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Leave a message here"
                          id="message"
                          style={{
                            height: '150px',
                          }}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100 py-3" type="submit">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
