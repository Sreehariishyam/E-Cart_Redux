
import { faFacebookF, faInstagram, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight, faEnvelope, faPhone, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Footer() {
  return (
    <footer className="bg-primary text-white py-4">

      <div className="container-fluid px-lg-5">

        <div className="row justify-content-around">

          {/* First Column */}
          <div className="col-lg-4 col-md-6 mb-4">

            <h2>
              <FontAwesomeIcon icon={faTruckFast} className='ms-2' /> E-Cart
            </h2>

            <p className="fs-5">
              Designed and built with all the love in the world by the
              Luminar team with the help of our contributors.
            </p>

            <p className="fs-5 mt-4">
              Code licensed Luminar, docs CC BY 3.0.
            </p>

            <p className="fs-5 mt-4">
              Currently v5.3.2.
            </p>

          </div>

          {/* Second Column */}
          <div className="col-lg-2 col-md-6 mb-4">

            <h2>Links</h2>

            <div className="mt-3">
              <a href="/" className="d-block text-white text-decoration-none fs-5">Home</a>
              <a href="/wishlist" className="d-block text-white text-decoration-none fs-5">Wishlist</a>
              <a href="/cart" className="d-block text-white text-decoration-none fs-5">Cart</a>
            </div>

          </div>

          {/* Third Column */}
          <div className="col-lg-2 col-md-6 mb-4">

            <h2>Guides</h2>

            <div className="mt-3">
              <a href="#" className="d-block text-white text-decoration-none fs-5">React</a>
              <a href="#" className="d-block text-white text-decoration-none fs-5">React Bootstrap</a>
              <a href="#" className="d-block text-white text-decoration-none fs-5">React Router</a>
            </div>

          </div>

          {/* Fourth Column */}
          <div className="col-lg-3 col-md-6 mb-4">

            <h2>Contact Us</h2>

            <form className="d-flex align-items-center mt-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email Here"
              />

              <FontAwesomeIcon icon={faArrowRight} className='ms-2'/>
            </form>

            {/* Social Icons */}
            <div className="d-flex justify-content-between mt-4">

              <FontAwesomeIcon icon={faFacebookF} className="text-white"/>
              <FontAwesomeIcon icon={faWhatsapp} className="text-white"/>
              <FontAwesomeIcon icon={faXTwitter} className="text-white "/>
              <FontAwesomeIcon icon={faInstagram} className="text-white"/>
              <FontAwesomeIcon icon={faEnvelope} className="text-white"/>
              <FontAwesomeIcon icon={faPhone} className="text-white "/>

            </div>

          </div>

        </div>

        {/* Copyright */}
        <div className="text-center fw-bold fs-5">

          Copyright © July 2026 Batch, Daily Cart.
          Built with React Redux.

        </div>

      </div>

    </footer>
  )
}

export default Footer
