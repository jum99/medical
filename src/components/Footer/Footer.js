import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import location from "../../images/location.png";
import call from "../../images/call1.png";
import email from "../../images/email.png";
import fb from "../../images/facebook.png";
import insta from "../../images/instagram.png";
import twitter from "../../images/twitter.png";
import logo from "../../images/footer-logo.png";

const Footer = () => {
  return (
    <div className="footer-section mt-5">
      <div className="footer-top row row-cols-md-5 row-cols-lg-5 row-cols-sm-2">
        <div>
          <img className="mb-2" src={logo} alt="" />
          <div>
            <div className="d-flex align-items-center">
              <img className="mb-3 me-3" src={location} alt="" />
              <p>
                Building No. 43, Third Floor, above custom shop Bharat Nagar,
                New Delhi, 110025
              </p>
            </div>
            <div className="d-flex align-items-center">
              <img className="mb-3 me-3" src={call} alt="" />
              <p>+91-9958087437 / 9911004958</p>
            </div>
            <div className="d-flex align-items-center">
              <img className="mb-3 me-3" src={email} alt="" />
              <p>info@tripoheal.com</p>
            </div>
          </div>
          <div className="footer-social-icon">
            <img src={fb} alt="" />
            <img src={insta} alt="" />
            <img src={twitter} alt="" />
          </div>
        </div>
        <div className="footer-links mb-3">
          <h5>Services</h5>
          <Link>Kidney Transplant in India</Link>
          <Link>Liver Transplant in India</Link>
          <Link>Bone Marrow Transplant in India</Link>
          <Link>Heart Transplant in India</Link>
          <Link>Brain Tumor Surgery in India</Link>
          <Link>Heart Valve Replacement in India</Link>
          <Link>VP Shunt Surgery in India</Link>
        </div>
        <div className="footer-links mb-3">
          <h5>Services</h5>
          <Link>Kidney Transplant in India</Link>
          <Link>Liver Transplant in India</Link>
          <Link>Bone Marrow Transplant in India</Link>
          <Link>Heart Transplant in India</Link>
          <Link>Brain Tumor Surgery in India</Link>
          <Link>Heart Valve Replacement in India</Link>
          <Link>VP Shunt Surgery in India</Link>
        </div>
        <div className="footer-links mb-3">
          <h5>Services</h5>
          <Link>Kidney Transplant in India</Link>
          <Link>Liver Transplant in India</Link>
          <Link>Bone Marrow Transplant in India</Link>
          <Link>Heart Transplant in India</Link>
          <Link>Brain Tumor Surgery in India</Link>
          <Link>Heart Valve Replacement in India</Link>
          <Link>VP Shunt Surgery in India</Link>
        </div>
        <div className="footer-links mb-3">
          <h5>Services</h5>
          <Link>Kidney Transplant in India</Link>
          <Link>Liver Transplant in India</Link>
          <Link>Bone Marrow Transplant in India</Link>
          <Link>Heart Transplant in India</Link>
          <Link>Brain Tumor Surgery in India</Link>
          <Link>Heart Valve Replacement in India</Link>
          <Link>VP Shunt Surgery in India</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Tripoheal. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
