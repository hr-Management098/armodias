import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";



function Home() {
  return (
    <>

      <section className="hero">

        <div className="hero-container d-flex">

          <div className="hero-left w-50">
            <div className="container">

              <h5>Tired of your accountant ignoring your calls?</h5>
              <h1>Where Finance <br />
                <span> Meets Trust</span>
              </h1>

              <p className="fs-5 mb-4">Expert Tax Sound Finance - we priortize YOU. We respond quickly, professionally, and get th ejob done right the first time.</p>
              <div className="mb-5">
                <Button className="me-3 pe-3 ps-3" href="/contact" variant="warning">Get Free Consultation</Button>
                <Button className="pe-4 ps-4" href="/contact" variant="light">Contact us </Button>
              </div>

              <div className="d-flex call-email ">

                <div className="card mb-3 w-50 " style={{ maxWidth: "540px" }}>
                  <div className="row g-0">
                    <div className="col-md-4 telephone">
                      <i className="bi bi-telephone"></i>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body ceCard ">
                        <h6 className="card-title fw-bold">Call Now</h6>
                        <h6 className="fw-light">07466 390181</h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card mb-3 w-50" style={{ maxWidth: "540px" }}>
                  <div className="row g-0">
                    <div className="col-md-4 telephone">
                      <i className="bi bi-envelope"></i>

                    </div>
                    <div className="col-md-8">
                      <div className="card-body ceCard">
                        <h6 className="card-title fw-bold">Email Us</h6>
                        <h6 className="fw-light">Info@armodiasaccounting.co.uk</h6>
                      </div>
                    </div>
                  </div>
                </div>

              </div>


            </div>

          </div>




          <div className="hero-right w-50">
            <div className="container">


              <div className="rDiv mb-4">

                <div>
                  <h2>1921+</h2>
                  <h6>Business Planning Support</h6>
                </div>
                <div><i className="bi bi-graph-up-arrow"></i></div>

              </div>
              <div className="rDiv mb-4">

                <div>
                  <h2>100%</h2>
                  <h6>Support Guarantee</h6>
                </div>
                <div><i className="bi bi-award"></i></div>

              </div>
              <div className="rDiv mb-4">

                <div>
                  <h2>24/7</h2>
                  <h6>Professional Service</h6>
                </div>
                <div><i className="bi bi-star"></i></div>

              </div>



            </div>
          </div>
        </div>
      </section>



      <section className="home_services  py-5">

        <div className="container">

          <div className="text-center mb-5 pb-3">
            <h1 className="mb-3"><b>Our Expert Services</b></h1>
            <h4>Comprehensive financial and accounting solutions tailored to your business needs</h4>
          </div>



          <div className="service-cards">


            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card h-100 pt-4 pb-2 px-2 cb">
                  <i className="bi bi-building serv_icon"></i>
                  <div className="card-body">
                    <h5 className="card-title my-2">Company Formation</h5>
                    <p className="card-text my-3">Launch your business with expert support in registration and legal setup</p>
                    <NavLink className="lrnM" to="/services">Learn More &nbsp; →</NavLink>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 pt-4 pb-2 px-2 cb">
                  <i className="bi bi-calculator-fill"></i>
                  <div className="card-body">
                    <h5 className="card-title my-2">Bookkeeping</h5>
                    <p className="card-text my-3">Keep your finances organized with accurate and timely bookkeeping services</p>
                    <NavLink className="lrnM" to="/services">Learn More &nbsp; →</NavLink>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 pt-4 pb-2 px-2 cb">
                  <i className="bi bi-file-earmark-text"></i>
                  <div className="card-body">
                    <h5 className="card-title my-2">VAT & Payroll</h5>
                    <p className="card-text my-3">Stay compliant and efficient with complete tax and payroll management</p>
                    <NavLink className="lrnM" to="/services">Learn More &nbsp; →</NavLink>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 pt-4 pb-2 px-2 cb">
                  <i className="bi bi-shield-check"></i>
                  <div className="card-body">
                    <h5 className="card-title my-2">Statutory Accounts</h5>
                    <p className="card-text my-3">Prepare and file compliant annual accounts for business</p>
                    <NavLink className="lrnM" to="/services">Learn More &nbsp; →</NavLink>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 pt-4 pb-2 px-2 cb">
                  <i className="bi bi-window-desktop"></i>
                  <div className="card-body">
                    <h5 className="card-title my-2">Corporation Tax</h5>
                    <p className="card-text my-3">Ensure accurate tax filings and optimize your coroorate tax position</p>
                    <NavLink className="lrnM" to="/services">Learn More &nbsp; →</NavLink>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 pt-4 pb-2 px-2 cb">
                  <i className="bi bi-globe"></i>
                  <div className="card-body">
                    <h5 className="card-title my-2">Visa Applications</h5>
                    <p className="card-text my-3">Navigate visa processes with professional help for various application types</p>
                    <NavLink className="lrnM" to="/services">Learn More &nbsp; →</NavLink>
                  </div>
                </div>
              </div>

            </div>



          </div>

          <div className="container text-center">

            <Button className="mt-5 px-4 py-2" href="/services" variant="primary">View All Services</Button>
          </div>



        </div>

      </section>



      <section className="choose_armodias my-5 py-3">



        <div className="container d-md-flex">

          <div className="wca_left">

            <div className="container">

              <h1>Why Choose Armodias?</h1>
              <p className="mt-4">We understand the frustration of unresponsive accountants. <br />
                That's why we built our practice around YOU - the client.
              </p>

            </div>

            <div className="container mt-4">
              <h6><b>Quick Response Time</b></h6>
              <p>We respond to calls and emails promptly - no more waiting days for replies</p>

              <h6><b>Professional Excellence</b></h6>
              <p>Expert knowledge across all areas of tax, accounting, and business formation</p>

              <h6><b>Done Right, First Time</b></h6>
              <p>Our meticulous approach ensures accuracy and compiance from the start</p>
            </div>

          </div>

          <div className="wca_right">

            <div className="container p-4">

              <div className="d-flex my-3 px-3 py-2">
                <i className="bi bi-people"></i>
                <div>
                  <h6><b>Client-First Approach </b></h6>
                  <p>Your success is our priority</p>
                </div>
              </div>

              <div className="d-flex my-3 px-3 py-2">
                <i className="bi bi-shield-shaded"></i>
                <div className="">
                  <h6><b>Trusted & Reliable</b></h6>
                  <p>Estalished expertise you can count on</p>
                </div>
              </div>
            </div>

          </div>

        </div>




      </section>



      <section className="experience py-5">

        <div className="container text-center py-4">
          <div className="text-white">
            <h2>Ready to Experience the Armodias Difference?</h2>
            <p className="my-4">Join the growing number of businesses who trust us with their financial <br /> future. Get your free consultation today.</p>
          </div>
          <div className="d-flex justify-content-center">
            <Button className="btn-sfc mx-2 px-4 py-2" href="/contact">Schedule Free Consultation</Button>
            <Button className="mx-2 px-4 py-2" variant="light" href="/contact">Call: 07466 390181</Button>
          </div>

        </div>

      </section>




    </>
  );
};
export default Home;
