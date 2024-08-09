import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/contact/submit', {
        firstName,
        lastName,
        email,
        message
      });

      if (response.status === 200) {
        setSuccess('Message sent successfully!');
        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
      } else {
        setError('Failed to send message');
      }
    } catch (error) {
      console.error(error);
      setError('An error occurred while sending the message');
    }
  };

  return (
    <>
      <section className="contact-wrapper p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="text">Reach Out to Us</h1>
              <p className='text fs-3'>We are only a step away from you</p>
            </div>
          </div>
        </div>
      </section>
      <div className="contact-wrapper-details p-5">
        <div className="container-xxl">
          <div className="row text-center align-items-center">
            <div className="col-lg-6 col-md-12 p-3">
              <div className="map card m-auto embed-responsive embed-responsive-16by9">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63826.53634427054!2d37.09345325!3d-1.04201225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4e5b27c66117%3A0xb6f8a7e126152c26!2sThika!5e0!3m2!1sen!2ske!4v1668532780442!5m2!1sen!2ske"
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="card p-5">
                <h2 className='footer-title mb-3'><b>Contact Us</b></h2>
                <p className='mb-2'><b>Address:</b> Thika town, Naltex building, 2nd floor</p>
                <p className='mb-2'><b>Phone:</b> <a className='footer-tel' href="tel:+1234567890">Call us at +91 9999 8888</a></p>
                <p className='mb-4'><b>Hours:</b> From 8 a.m To 6 p.m</p>
                <p>We'd love to hear from you! Whether you have questions about our services, need assistance with an order, or simply want to provide feedback, we're here to help.</p>
                <p>At QuickBox, customer satisfaction is our top priority.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-message p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-8 col-md-10 col-sm-12 m-auto">
              <div className="card p-5">
                <h2 className='text-center mb-4'>Leave Us A Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="row g-3">
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First name"
                          aria-label="First name"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last name"
                          aria-label="Last name"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          required
                        />
                      </div>
                      <div className='col-12'>
                        <label htmlFor="email" className="form-label mb-3">Enter Your Email address</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="message" className="form-label">Type in your message</label>
                        <textarea
                          className="form-control"
                          id="message"
                          rows="3"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          required
                        ></textarea>
                      </div>
                      <div className='col-12 text-center gap-2'>
                        <button id='button-link' type="submit">Submit</button>
                      </div>
                    </div>
                  </div>
                </form>
                {success && <div className="alert alert-success mt-3">{success}</div>}
                {error && <div className="alert alert-danger mt-3">{error}</div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
