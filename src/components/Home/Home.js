import React from "react";
import "./Home.css";
import { Accordion, Col, Row } from "react-bootstrap";
import service1 from "../../images/service1.png";
import heart from "../../images/heart-icon.png";
import location from "../../images/location.png";
import hospitalIcon from "../../images/hospital-icon.png";
import dollar from "../../images/dollar.png";
import hospital from "../../images/hospital1.png";
import circle from "../../images/circle.png";
import patient1 from "../../images/patient1.png";
import patient2 from "../../images/patient2.png";
import patient3 from "../../images/patient3.png";
import doctor3 from "../../images/doctor3.png";
import doctor4 from "../../images/doctor4.png";
import doctor5 from "../../images/doctor5.png";
import injection from "../../images/injection.png";
import story1 from "../../images/story1.png";
import story2 from "../../images/story2.png";
import story3 from "../../images/story3.png";
import credit1 from "../../images/credit1.png";
import credit2 from "../../images/credit2.png";
import credit3 from "../../images/credit3.png";
import calendar from "../../images/calendar.png";
import call from "../../images/call2.png";
import HomeBanner from "./HomeBanner";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <div className="container mt-5">
        <section className="text-center">
          <button className="top-btn mb-3">Our Products</button>
          <h2 className="mb-4">Services We Offer</h2>
          <Row xs={2} md={6}>
            <Col>
              <div className="service-card">
                <img src={service1} alt="" />
                <h5>Video Consultant</h5>
              </div>
            </Col>
            <Col>
              <div className="service-card">
                <img src={service1} alt="" />
                <h5>Video Consultant</h5>
              </div>
            </Col>
            <Col>
              <div className="service-card">
                <img src={service1} alt="" />
                <h5>Video Consultant</h5>
              </div>
            </Col>
            <Col>
              <div className="service-card">
                <img src={service1} alt="" />
                <h5>Video Consultant</h5>
              </div>
            </Col>
            <Col>
              <div className="service-card">
                <img src={service1} alt="" />
                <h5>Video Consultant</h5>
              </div>
            </Col>
            <Col>
              <div className="service-card">
                <img src={service1} alt="" />
                <h5>Video Consultant</h5>
              </div>
            </Col>
          </Row>
        </section>
        <section className="mt-5">
          <div className="text-center">
            <button className="top-btn mb-3">FEATURED</button>
            <h2 className="mb-5">Treatments We Serve</h2>
          </div>
          <Row xs={1} md={2}>
            <div className="col-6 col-md-4">
              <p>All</p>
              <p>Urology</p>
              <p>Orthopaedics</p>
              <p>Opthalmology</p>
              <p>Cosmetology</p>
              <p>Proctology</p>
              <p>Interventional Radiology</p>
              <p>Vascular Surgery</p>
              <p>Fertility</p>
              <p>General Surgery</p>
            </div>
            <div className="col-sm-6 col-md-8">
              <Row xs={2} md={4} className="g-4">
                <Col>
                  <div className="treatment-card">
                    <img src={heart} alt="" />
                    <h5>Card 1</h5>
                  </div>
                </Col>
                <Col>
                  <div className="treatment-card">
                    <img src={heart} alt="" />
                    <h5>Card 2</h5>
                  </div>
                </Col>
                <Col>
                  <div className="treatment-card">
                    <img src={heart} alt="" />
                    <h5>Card 3</h5>
                  </div>
                </Col>
                <Col>
                  <div className="treatment-card">
                    <img src={heart} alt="" />
                    <h5>Card 4</h5>
                  </div>
                </Col>
                <Col>
                  <div className="treatment-card">
                    <img src={heart} alt="" />
                    <h5>Card 5</h5>
                  </div>
                </Col>
                <Col>
                  <div className="treatment-card">
                    <img src={heart} alt="" />
                    <h5>Card 6</h5>
                  </div>
                </Col>
                <Col>
                  <div className="treatment-card">
                    <img src={heart} alt="" />
                    <h5>Card 7</h5>
                  </div>
                </Col>
                <Col>
                  <div className="treatment-card">
                    <img src={heart} alt="" />
                    <h5>Card 8</h5>
                  </div>
                </Col>
                <Col>
                  <div className="treatment-card">
                    <img src={heart} alt="" />
                    <h5>Card 9</h5>
                  </div>
                </Col>
                <Col>
                  <div className="treatment-card">
                    <img src={heart} alt="" />
                    <h5>Card 10</h5>
                  </div>
                </Col>
                <Col>
                  <div className="treatment-card">
                    <img src={heart} alt="" />
                    <h5>Card 11</h5>
                  </div>
                </Col>
                <Col>
                  <div className="treatment-card">
                    <img src={heart} alt="" />
                    <h5>Card 12</h5>
                  </div>
                </Col>
              </Row>
            </div>
          </Row>
        </section>

        <section className="mt-5 mb-5 container">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <button className="top-btn mb-3">Our Products</button>
              <h2 className="mb-5">Featured Packages</h2>
            </div>
            <div>
              <select
                className="form-select select-country"
                aria-label="Default select example"
              >
                <option selected>Select Country</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>

          <div>
            <Row xs={1} md={2}>
              <Col>
                <div className="package-card d-flex mb-3">
                  <img
                    className="me-4"
                    style={{ width: "150px" }}
                    src={patient3}
                    alt=""
                  />
                  <div className="mt-1">
                    <h4>Tummy Tuck</h4>
                    <div className="d-flex align-items-center mb-2 justify-content-between">
                      <div>
                        <p style={{ marginBottom: "2px" }}>Start from</p>
                        <h4
                          style={{
                            color: "rgba(51, 160, 141, 1)",
                            fontWeight: 800,
                          }}
                        >
                          USD 4540
                        </h4>
                      </div>
                      <div>
                        <p style={{ marginBottom: "2px" }}>Start from</p>
                        <h4
                          style={{
                            color: "rgba(51, 160, 141, 1)",
                            fontWeight: 800,
                            textDecoration: "line-through",
                          }}
                        >
                          USD 5000
                        </h4>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <img className="mb-3 me-3" src={location} alt="" />
                      <p>Fortis Hospital, Shalimar Bagh, Delhi, India</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="package-card d-flex mb-3">
                  <img
                    className="me-4"
                    style={{ width: "150px" }}
                    src={patient3}
                    alt=""
                  />
                  <div className="mt-1">
                    <h4>Tummy Tuck</h4>
                    <div className="d-flex align-items-center mb-2 justify-content-between">
                      <div>
                        <p style={{ marginBottom: "2px" }}>Start from</p>
                        <h4
                          style={{
                            color: "rgba(51, 160, 141, 1)",
                            fontWeight: 800,
                          }}
                        >
                          USD 4540
                        </h4>
                      </div>
                      <div>
                        <p style={{ marginBottom: "2px" }}>Start from</p>
                        <h4
                          style={{
                            color: "rgba(51, 160, 141, 1)",
                            fontWeight: 800,
                            textDecoration: "line-through",
                          }}
                        >
                          USD 5000
                        </h4>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <img className="mb-3 me-3" src={location} alt="" />
                      <p>Fortis Hospital, Shalimar Bagh, Delhi, India</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </section>
        <section>
          <div className="text-center">
            <button className="top-btn mb-3">Top Hospital</button>
            <h2 className="mb-5">Our Network of Hospital</h2>
          </div>

          <Row xs={1} md={3}>
            <Col>
              <div className="home-hospital-card">
                <div className="home-hospital">
                  <img src={hospital} alt="" />
                </div>

                <h4 className="mt-3 mb-3">Indraprastha Apollo Hospital</h4>
                <div className="d-flex align-items-center">
                  <img className="mb-3 me-3" src={location} alt="" />
                  <p>New delhi, india</p>
                </div>
                <p style={{ color: "rgba(213, 69, 81, 1)" }}>
                  Explore Hospital In India
                </p>
              </div>
            </Col>
            <Col>
              <div className="home-hospital-card">
                <div className="home-hospital">
                  <img src={hospital} alt="" />
                </div>
                <h4 className="mt-3 mb-3">Indraprastha Apollo Hospital</h4>
                <div className="d-flex align-items-center">
                  <img className="mb-3 me-3" src={location} alt="" />
                  <p>New delhi, india</p>
                </div>
                <p style={{ color: "rgba(213, 69, 81, 1)" }}>
                  Explore Hospital In India
                </p>
              </div>
            </Col>
            <Col>
              <div className="home-hospital-card">
                <div className="home-hospital">
                  <img src={hospital} alt="" />
                </div>

                <h4 className="mt-3 mb-3">Indraprastha Apollo Hospital</h4>
                <div className="d-flex align-items-center">
                  <img className="mb-3 me-3" src={location} alt="" />
                  <p>New delhi, india</p>
                </div>
                <p style={{ color: "rgba(213, 69, 81, 1)" }}>
                  Explore Hospital In India
                </p>
              </div>
            </Col>
          </Row>
          <div className="text-center mt-3 mb-3">
            <button className="view-btn">View All Hospitals</button>
          </div>
        </section>

        {/* incomplete */}
        <section>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <button className="top-btn mb-3">OUR DOCTERS</button>
              <h2 className="mb-5">Top Telemedicine Doctors</h2>
            </div>
            <div>
              <select
                className="form-select select-country"
                aria-label="Default select example"
              >
                <option selected>View All Hospitals</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>

          <div>
            <Row xs={1} md={3}>
              <Col>
                <div className="top-doctor-card d-flex mb-3">
                  <img
                    className="me-4"
                    style={{ width: "130px" }}
                    src={doctor3}
                    alt=""
                  />
                  <div className="mt-1">
                    <h4>Doctor name</h4>

                    <div className="d-flex align-items-center">
                      <img className="mb-3 me-3" src={hospitalIcon} alt="" />
                      <p>Indraprastha Apollo Hospital</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <img className="mb-3 me-3" src={location} alt="" />
                      <p>Delhi, India</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <img className="mb-3 me-3" src={dollar} alt="" />
                      <p>USD 32 for video consultation</p>
                    </div>
                    <h6>Book Your Consult</h6>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="top-doctor-card d-flex mb-3">
                  <img
                    className="me-4"
                    style={{ width: "130px" }}
                    src={doctor4}
                    alt=""
                  />
                  <div className="mt-1">
                    <h4>Doctor name</h4>

                    <div className="d-flex align-items-center">
                      <img className="mb-3 me-3" src={hospitalIcon} alt="" />
                      <p>Indraprastha Apollo Hospital</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <img className="mb-3 me-3" src={location} alt="" />
                      <p>Delhi, India</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <img className="mb-3 me-3" src={dollar} alt="" />
                      <p>USD 32 for video consultation</p>
                    </div>
                    <h6>Book Your Consult</h6>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="top-doctor-card d-flex mb-3">
                  <img
                    className="me-4"
                    style={{ width: "130px" }}
                    src={doctor5}
                    alt=""
                  />
                  <div className="mt-1">
                    <h4>Doctor name</h4>

                    <div className="d-flex align-items-center">
                      <img className="mb-3 me-3" src={hospitalIcon} alt="" />
                      <p>Indraprastha Apollo Hospital</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <img className="mb-3 me-3" src={location} alt="" />
                      <p>Delhi, India</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <img className="mb-3 me-3" src={dollar} alt="" />
                      <p>USD 32 for video consultation</p>
                    </div>
                    <h6>Book Your Consult</h6>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </section>

        <section className="text-center">
          <button className="top-btn mb-3">Testimonials</button>
          <h2 className="mb-3">Satisfied Patients Reviews</h2>
          <p style={{ fontSize: 24, margin: "20px auto" }}>
            "I've never felt more cared for than I did at Tripoheal. The <br />
            healthcare providers were compassionate, and they took <br /> the
            time to listen to my needs. The atmosphere was <br /> welcoming
          </p>
          <div>
            <img src={circle} alt="" />
            <h4>Md Ashif</h4>
            <p>New Delhi, India</p>
          </div>
        </section>

        <section className="mt-5">
          <div className="text-center">
            <button className="top-btn mb-3">Video Testimonials</button>
            <h2 className="mb-5">Satisfied Patients Reviews</h2>
          </div>

          <Row xs={1} md={3}>
            <Col>
              <div className="home-patient-card">
                <div className="home-patient">
                  <img src={patient1} alt="" />
                </div>
                <h4 className="mt-3 mb-3">Md Ashif</h4>
                <p>New delhi, india</p>
              </div>
            </Col>
            <Col>
              <div className="home-patient-card">
                <div className="home-patient">
                  <img src={patient2} alt="" />
                </div>
                <h4 className="mt-3 mb-3">Smith Johnson</h4>
                <p>New delhi, india</p>
              </div>
            </Col>
            <Col>
              <div className="home-patient-card">
                <div className="home-patient">
                  <img src={patient3} alt="" />
                </div>
                <h4 className="mt-3 mb-3">Jennifer Winds</h4>
                <p>New delhi, india</p>
              </div>
            </Col>
          </Row>
          <div className="text-center mt-3 mb-3">
            <button className="view-btn">View All Testimonials</button>
          </div>
        </section>

        <section className="mt-5">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <button className="top-btn mb-3">Latest Blogs</button>
              <h2 className="mb-5">Stories, Tips & Latest News</h2>
            </div>
            <div>
              <select
                className="form-select select-country"
                aria-label="Default select example"
              >
                <option selected>View All Blogs</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>

          <Row xs={1} md={2}>
            <Col>
              <div className="home-stories-card">
                <img src={injection} alt="" />
                <p className="mt-3" style={{ color: "rgba(17, 148, 152, 1)" }}>
                  APRIL 26, 2022
                </p>
                <h5>
                  Updated Covid boosters rolled out a month ago. Here's how many
                  Americans have gotten them.
                </h5>
                <h6>Read More</h6>
              </div>
            </Col>
            <Col>
              <div className="stories-small-card">
                <Row xs={1} md={2}>
                  <div className="col-sm-6 col-md-4">
                    <img src={story1} alt="" />
                  </div>
                  <div className="col-sm-6 col-md-8 mt-2">
                    <h5>
                      The Dos and Don’ts of Teeth Whitening: Expert Advice
                    </h5>
                    <p>
                      Those who report weightlifting show reductions in all-
                      cause and cardiovascular disease-related mortality.
                    </p>
                  </div>
                </Row>
              </div>
              <div className="stories-small-card">
                <Row xs={1} md={2}>
                  <div className="col-sm-6 col-md-4">
                    <img src={story2} alt="" />
                  </div>
                  <div className="col-sm-6 col-md-8 mt-2">
                    <h5>
                      Oral Cancer Awareness: Signs, Symptoms, and Prevention
                    </h5>
                    <p>
                      Those who report weightlifting show reductions in all-
                      cause and cardiovascular disease-related mortality.
                    </p>
                  </div>
                </Row>
              </div>
              <div className="stories-small-card">
                <Row xs={1} md={2}>
                  <div className="col-sm-6 col-md-4">
                    <img src={story3} alt="" />
                  </div>
                  <div className="col-sm-6 col-md-8 mt-2">
                    <h5>
                      Oral Health for All Ages: Tips for Kids, Teens, and Adults
                    </h5>
                    <p>
                      Those who report weightlifting show reductions in all-
                      cause and cardiovascular disease-related mortality.
                    </p>
                  </div>
                </Row>
              </div>
            </Col>
          </Row>
        </section>

        <section className="mt-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <button className="top-btn mb-3">Quality Assured</button>
              <h2 className="mb-3">Surgical Treatment</h2>
              <h5>
                Only In JCI Accredited HospitalsFor Desired Clinical Outcomes.
              </h5>
            </div>
            <div className="certified d-flex me-2">
              <img src={credit1} alt="" />
              <img src={credit2} alt="" />
              <img src={credit3} alt="" />
            </div>
          </div>

          <div className="surgical-treatment">
            <h4 className="text-center mb-5">
              Get personalized assistance for your treatment
            </h4>

            <Row xs={1} md={2}>
              <Col>
                <div className="d-flex align-items-center mt-3">
                  <div className="call-img me-4">
                    <img src={call} alt="" />
                  </div>
                  <div>
                    <button className="white-btn mb-2">Call us on</button>
                    <h3>+91-9958087437</h3>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="d-flex align-items-center mt-3">
                  <div className="call-img me-4">
                    <img src={calendar} alt="" />
                  </div>
                  <div>
                    <button className="white-btn mb-2">
                      Book an Appointment
                    </button>
                    <h3>Book Here</h3>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
