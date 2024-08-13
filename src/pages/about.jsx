/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import blog1 from '../assets/images/blog/blog-1.jpg'
import blog2 from '../assets/images/blog/blog-2.jpg'
import blog3 from '../assets/images/blog/blog-3.jpg'
import blog4 from '../assets/images/blog/blog-4.jpg'
import a6 from '../assets/images/about/a6.jpg'
import video from '../assets/images/about/1.mp4'
import Marquee from "react-fast-marquee";
import orders from '../assets/images/icons/icon1.png'
import orders1 from '../assets/images/icons/icon2.png'
import orders2 from '../assets/images/icons/icon3.png'
import orders3 from '../assets/images/icons/icon4.png'
import orders4 from '../assets/images/icons/icon5.png'

import mobileImage from '../assets/images/mobileimage.jpg'
const about = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check the screen width on component mount and when it's resized
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Call the handleResize function initially
    handleResize();

    // Add an event listener to handle screen resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return <>
    <section className="about-wrapper p-5 d-flex justify-content-center align-items-center">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="shop-details text-center align-items-center">
              <h1 className="text-white">#Know Us</h1>
              <p className='text-white fs-3'>Get to know us more</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="about-us p-5">
      <div className="row">
        <div className="col-md-6">
          <img src={a6} alt="" className='img-fluid p-5' />
        </div>
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
          <h1><b>Who are we?</b></h1>
          <p className="card-text mb-3">QuickBox connects customers with local stores for fast and convenient delivery of a wide range of products. Unlike traditional models, QuickBox ensures faster and more reliable service by enabling local stores to handle their own deliveries directly to customers. Experience the future of local shopping with QuickBox's efficient and customer-centric approach.

QuickBox offers a seamless online shopping experience with an intuitive platform where customers can browse, order, and track their deliveries in real-time. With QuickBox, local businesses gain a competitive edge, and customers enjoy quick access to their favorite products without the wait. Trust QuickBox to deliver not just products, but satisfaction and convenience right to your doorstep. </p>
          <p className="card-text"><br />  <br /> </p>
        </div>
      </div>
    </section>

    <section className="about-app p-5">
      <h2 className='fs-1 text-center mb-4' >Marketing ads</h2>
      <div className="col-12 p-5 col-md-8 mx-auto">
        {isMobile ? (
          // Render a mobile-friendly video or image here
          <img src={mobileImage} alt="Mobile Image" className='w-100' />
        ) : (
          // Render the video for larger screens
          <video loop muted autoPlay src={video} className='w-100'></video>
        )}
      </div>
    </section>

    <section className="abouts p-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 d-flex flex-column align-items-center">
            <h1 className='mb-3'>What our customers say...</h1>
            <p className='mb-4'>Our customers never miss a bit on providing feedback</p>
          </div>
          <div className="col-12 col-md-6 p-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog1} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Marvel Clein</h5>
                    <p className="card-text mb-3">QuickBox is incredibly convenient! The deliveries are always on time, and the product quality is top-notch. I'm really impressed with the customer service as well. Highly recommended!<br /> <br /></p>
                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 p-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog2} alt="" className='img-fluid rounded-start' />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Melisa Ivy</h5>
                    <p className="card-text mb-3">I love how QuickBox connects me with local stores. It’s great to support my community while getting what I need quickly. The app is user-friendly, and the delivery process is seamless. <br /> <br /></p>
                    <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 p-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog3} alt="" className='img-fluid rounded-start' />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Tristian Ann</h5>
                    <p className="card-text mb-3">QuickBox has made my shopping experience so much easier. The variety of products is fantastic, and the delivery is always fast. I appreciate the excellent communication from the delivery staff. <br /></p>
                    <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 p-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog4} alt="" className='img-fluid rounded-start' />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Phillip Omosh</h5>
                    <p className="card-text mb-3">QuickBox never disappoints. The deliveries are prompt, and the items always arrive in perfect condition. It's my go-to app for all my shopping needs. Keep up the great work! <br /></p>
                    <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 p-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog2} alt="" className='img-fluid rounded-start' />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Melisa Ivy</h5>
                    <p className="card-text mb-3">I've had nothing but positive experiences with QuickBox. The service is reliable, and I love the quick turnaround time. The local stores have a great selection, and the delivery fees are reasonable. <br /><br /></p>
                    <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 p-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog1} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Marvel Clein</h5>
                    <p className="card-text mb-3">QuickBox has revolutionized my shopping habits. The convenience of having local stores deliver directly to my door is unmatched. The customer service team is always helpful and responsive. A+ service! <br /><br /></p>
                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="col-12 p-3">
            <Marquee className='p-2 slide'>
              <div>
                <img src={orders} alt="" className='img-fluid' />
                <p className="card-text mb-2">Fast Orders</p>
              </div>
              <div>
                <img src={orders1} alt="" className='img-fluid' />
                <p className="card-text mb-2">Quick Shipping</p>

              </div>
              <div>
                <img src={orders2} alt="" className='img-fluid' />
                <p className="card-text mb-2">High Saves</p>
              </div>
              <div>
                <img src={orders3} alt="" className='img-fluid' />
                <p className="card-text">24/7 Support</p>
              </div>
              <div>
                <img src={orders4} alt="" className='img-fluid' />
                <p className="card-text">Online Orders</p>
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  </>;
}

export default about