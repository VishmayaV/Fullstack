import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import pay from '../assets/images/pay/pay.png';
import { ShopContext } from '../components/shopcontext';

const Checkout = () => {
  const { getTotalCartProducts, getTotalCartAmount, resetCart } = useContext(ShopContext);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    pin: '',
    paymentMethod: 'wallet', // default payment method
    cardNumber: '',
    expiryDate: '',
    cvc: ''
  });

  const totalAmount = getTotalCartAmount();
  const totalProducts = getTotalCartProducts();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handlePay = async (e) => {
    e.preventDefault();
 
    window.alert(`Thank you for your purchase of ${totalProducts} products for a total of Rs${totalAmount}. Your request has been received and is being processed.`);

    try {

      const response = await axios.post('http://localhost:8080/api/orders', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log('Order created:', response.data);

   
      resetCart();

      navigate('/success'); // Change to the appropriate route or page
    } catch (error) {
      console.error('Error:', error);
      // Handle errors (e.g., show an error message)
      window.alert('An error occurred while processing your payment. Please try again.');
    }
  };

  return (
    <section className="checkout p-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-md-6">
            <h1 className="mb-4 fs-3">Payment Method</h1>
            <div className="accordion" id="accordionExample">
              <div className="card">
                <div className="card-header p-0" id="headingTwo">
                  <button className="btn col-12 btn-light btn-block text-start collapsed p-3 rounded-0 border-bottom-custom" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className='col-6'>
                        <span>Pay using wallet</span>
                      </div>
                      <div className='col-6'>
                        <img src={pay} alt="" className='img-fluid' />
                      </div>
                    </div>
                  </button>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="card-body">
                    <input type="text" className="form-control" id="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                    <input type="password" className="form-control" id="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                  </div>
                </div>
              </div>
              <div className="card m-auto">
                <div className="card-header p-0">
                  <button className="btn col-12 btn-light btn-block text-start p-3 rounded-0" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="col-6">
                        <span>Credit card</span>
                      </div>
                      <div className="icons col-6">
                        <img src={pay} alt="" className='img-fluid' />
                      </div>
                    </div>
                  </button>
                </div>
                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="card-body payment-card-body">
                    <span className="font-weight-normal card-text">Card Number</span>
                    <div className="input mb-4">
                      <i className="fa fa-credit-card"></i>
                      <input type="text" className="form-control" id="cardNumber" placeholder="0000 0000 0000 0000" value={formData.cardNumber} onChange={handleChange} required />
                    </div>
                    <div className="row mt-3 mb-3">
                      <div className="col-md-6">
                        <span className="font-weight-normal card-text">Expiry Date</span>
                        <div className="input">
                          <i className="fa fa-calendar"></i>
                          <input type="text" className="form-control" id="expiryDate" placeholder="MM/YY" value={formData.expiryDate} onChange={handleChange} required />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <span className="font-weight-normal card-text">CVC/CVV</span>
                        <div className="input mb-4">
                          <i className="fa fa-lock"></i>
                          <input type="text" className="form-control" id="cvc" placeholder="000" value={formData.cvc} onChange={handleChange} required />
                        </div>
                      </div>
                    </div>
                    <span className="text-muted certificate-text"><i className="fa fa-lock"></i> Your transaction is secured with ssl certificate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 p-2">
            <h1 className="mt-3 mb-3 fs-3">Fill the following details for shipping.</h1>
            <form className="row g-3 mb-3" onSubmit={handlePay}>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="col-md-6">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" value={formData.password} onChange={handleChange} required />
              </div>
              <div className="col-12">
                <label htmlFor="address" className="form-label">Address</label>
                <input type="text" className="form-control" id="address" placeholder="1234 Main St" value={formData.address} onChange={handleChange} />
              </div>
              <div className="col-12">
                <label htmlFor="address2" className="form-label">Address 2</label>
                <input type="text" className="form-control" id="address2" placeholder="Apartment, studio, or floor" value={formData.address2} onChange={handleChange} />
              </div>
              <div className="col-md-6">
                <label htmlFor="city" className="form-label">City</label>
                <input type="text" className="form-control" id="city" value={formData.city} onChange={handleChange} />
              </div>
              <div className="col-md-4">
                <label htmlFor="state" className="form-label">State</label>
                <select id="state" className="form-select" value={formData.state} onChange={handleChange}>
                  <option value="" disabled>Choose...</option>
                  {/* Add more options as needed */}
                  <option>State1</option>
                  <option>State2</option>
                </select>
              </div>
              <div className="col-md-2">
                <label htmlFor="pin" className="form-label">Pin</label>
                <input type="text" className="form-control" id="pin" value={formData.pin} onChange={handleChange} />
              </div>
              <div className="col-12 mt-5">
                <button id="button-linker" type="submit">Proceed To Pay</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
