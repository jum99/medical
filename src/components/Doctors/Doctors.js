import React from "react";
import "./Doctors.css";
import { Col, Row } from "react-bootstrap";
import doctor from "../../images/doctor.png";
import hospitalIcon from "../../images/hospital-icon.png";
import location from "../../images/location.png";
import dollar from "../../images/dollar.png";
import experience from "../../images/experience.png";
import CommonBanner from "../Header/CommonBanner";

const Doctors = () => {
  return (
    <div>
      <CommonBanner />
      <div className="text-center container mt-5">
        <button className="top-btn mb-3">OUR DOCTERS</button>
        <h2 className="mb-4">Find Top Telemedicine Doctors</h2>
        <div className="select-div mb-5">
          <div className="d-flex mb-2">
            <select className="form-select" aria-label="Default select example">
              <option selected>Search disease, surgeons or hospital</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <select className="form-select" aria-label="Default select example">
              <option selected>Location</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <select className="form-select" aria-label="Default select example">
              <option selected>Hospital</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <select className="form-select" aria-label="Default select example">
              <option selected>Specialty</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <button className="common-btn mb-2">Search Now</button>
        </div>
      </div>

      <section className="container">
        <Row xs={1} md={2}>
          <Col>
            <div className="mb-4">
              <div className="doctor-card d-flex mb-3">
                <img
                  className="me-4"
                  style={{ height: "285px" }}
                  src={doctor}
                  alt=""
                />
                <div className="mt-1">
                  <h5>DR. Vijaya Rajkumari</h5>
                  <h6>Nephrologist</h6>
                  <div className="doctor-tag mb-3 mt-3">
                    <button>MBBS</button>
                    <button>MS</button>
                    <button>DNB</button>
                    <button>FRCS</button>
                  </div>

                  <div className="d-flex align-items-center">
                    <img className="mb-3 me-3" src={hospitalIcon} alt="" />
                    <p>Indraprastha Apollo Hospital</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <img className="mb-3 me-3" src={location} alt="" />
                    <p>New delhi, india</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <img className="mb-3 me-3" src={dollar} alt="" />
                    <p>USD 32 for video consultation</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <img className="mb-3 me-3" src={experience} alt="" />
                    <p>45+ years Experience</p>
                  </div>
                </div>
              </div>
              <div>
                <button className="common-btn me-3">Book Your Consult</button>
                <button className="outline-btn">View Profile</button>
              </div>
            </div>
          </Col>
          <Col>
            <div className="mb-4">
              <div className="doctor-card d-flex mb-3">
                <img
                  className="me-4"
                  style={{ height: "285px" }}
                  src={doctor}
                  alt=""
                />
                <div className="mt-1">
                  <h5>DR. Vijaya Rajkumari</h5>
                  <h6>Nephrologist</h6>
                  <div className="doctor-tag mb-3 mt-3">
                    <button>MBBS</button>
                    <button>MS</button>
                    <button>DNB</button>
                    <button>FRCS</button>
                  </div>

                  <div className="d-flex align-items-center">
                    <img className="mb-3 me-3" src={hospitalIcon} alt="" />
                    <p>Indraprastha Apollo Hospital</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <img className="mb-3 me-3" src={location} alt="" />
                    <p>New delhi, india</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <img className="mb-3 me-3" src={dollar} alt="" />
                    <p>USD 32 for video consultation</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <img className="mb-3 me-3" src={experience} alt="" />
                    <p>45+ years Experience</p>
                  </div>
                </div>
              </div>
              <div>
                <button className="common-btn me-3">Book Your Consult</button>
                <button className="outline-btn">View Profile</button>
              </div>
            </div>
          </Col>
          <Col>
            <div className="mb-4">
              <div className="doctor-card d-flex mb-3">
                <img
                  className="me-4"
                  style={{ height: "285px" }}
                  src={doctor}
                  alt=""
                />
                <div className="mt-1">
                  <h5>DR. Vijaya Rajkumari</h5>
                  <h6>Nephrologist</h6>
                  <div className="doctor-tag mb-3 mt-3">
                    <button>MBBS</button>
                    <button>MS</button>
                    <button>DNB</button>
                    <button>FRCS</button>
                  </div>

                  <div className="d-flex align-items-center">
                    <img className="mb-3 me-3" src={hospitalIcon} alt="" />
                    <p>Indraprastha Apollo Hospital</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <img className="mb-3 me-3" src={location} alt="" />
                    <p>New delhi, india</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <img className="mb-3 me-3" src={dollar} alt="" />
                    <p>USD 32 for video consultation</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <img className="mb-3 me-3" src={experience} alt="" />
                    <p>45+ years Experience</p>
                  </div>
                </div>
              </div>
              <div>
                <button className="common-btn me-3">Book Your Consult</button>
                <button className="outline-btn">View Profile</button>
              </div>
            </div>
          </Col>
          <Col>
            <div className="mb-4">
              <div className="doctor-card d-flex mb-3">
                <img
                  className="me-4"
                  style={{ height: "285px" }}
                  src={doctor}
                  alt=""
                />
                <div className="mt-1">
                  <h5>DR. Vijaya Rajkumari</h5>
                  <h6>Nephrologist</h6>
                  <div className="doctor-tag mb-3 mt-3">
                    <button>MBBS</button>
                    <button>MS</button>
                    <button>DNB</button>
                    <button>FRCS</button>
                  </div>

                  <div className="d-flex align-items-center">
                    <img className="mb-3 me-3" src={hospitalIcon} alt="" />
                    <p>Indraprastha Apollo Hospital</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <img className="mb-3 me-3" src={location} alt="" />
                    <p>New delhi, india</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <img className="mb-3 me-3" src={dollar} alt="" />
                    <p>USD 32 for video consultation</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <img className="mb-3 me-3" src={experience} alt="" />
                    <p>45+ years Experience</p>
                  </div>
                </div>
              </div>
              <div>
                <button className="common-btn me-3">Book Your Consult</button>
                <button className="outline-btn">View Profile</button>
              </div>
            </div>
          </Col>
          <Col>
            <div className="mb-4">
              <div className="doctor-card d-flex mb-3">
                <img
                  className="me-4"
                  style={{ height: "285px" }}
                  src={doctor}
                  alt=""
                />
                <div className="mt-1">
                  <h5>DR. Vijaya Rajkumari</h5>
                  <h6>Nephrologist</h6>
                  <div className="doctor-tag mb-3 mt-3">
                    <button>MBBS</button>
                    <button>MS</button>
                    <button>DNB</button>
                    <button>FRCS</button>
                  </div>

                  <div className="d-flex align-items-center">
                    <img className="mb-3 me-3" src={hospitalIcon} alt="" />
                    <p>Indraprastha Apollo Hospital</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <img className="mb-3 me-3" src={location} alt="" />
                    <p>New delhi, india</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <img className="mb-3 me-3" src={dollar} alt="" />
                    <p>USD 32 for video consultation</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <img className="mb-3 me-3" src={experience} alt="" />
                    <p>45+ years Experience</p>
                  </div>
                </div>
              </div>
              <div>
                <button className="common-btn me-3">Book Your Consult</button>
                <button className="outline-btn">View Profile</button>
              </div>
            </div>
          </Col>
          <Col>
            <div className="mb-4">
              <div className="doctor-card d-flex mb-3">
                <img
                  className="me-4"
                  style={{ height: "285px" }}
                  src={doctor}
                  alt=""
                />
                <div className="mt-1">
                  <h5>DR. Vijaya Rajkumari</h5>
                  <h6>Nephrologist</h6>
                  <div className="doctor-tag mb-3 mt-3">
                    <button>MBBS</button>
                    <button>MS</button>
                    <button>DNB</button>
                    <button>FRCS</button>
                  </div>

                  <div className="d-flex align-items-center">
                    <img className="mb-3 me-3" src={hospitalIcon} alt="" />
                    <p>Indraprastha Apollo Hospital</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <img className="mb-3 me-3" src={location} alt="" />
                    <p>New delhi, india</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <img className="mb-3 me-3" src={dollar} alt="" />
                    <p>USD 32 for video consultation</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <img className="mb-3 me-3" src={experience} alt="" />
                    <p>45+ years Experience</p>
                  </div>
                </div>
              </div>
              <div>
                <button className="common-btn me-3">Book Your Consult</button>
                <button className="outline-btn">View Profile</button>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default Doctors;
