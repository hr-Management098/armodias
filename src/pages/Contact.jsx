import { Button } from "react-bootstrap";
import React from "react";
import emailjs from "emailjs-com";



function Contact() {



  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oc6x5om",   // from EmailJS
        "template_2mlzich",  // from EmailJS
        e.target,
        "ZfOfcV7tz8I4U7SIz"    // from EmailJS
      )
      .then(
        (result) => {
          console.log("Message Sent ✅", result.text);
          alert("Your message has been sent successfully!");
        },
        (error) => {
          console.log("Error ❌", error.text);
          alert("Something went wrong, please try again.");
        }
      );

    e.target.reset(); // clear form after submit
  }












  return (
    <>

      <section className="contact_hero py-5">
        <div className="container text-center">

          <h1 className="mb-4">Contact Us</h1>
          <p className="my-3 fs-5 fw-light">Ready to experience professional, responsive financial services? Get in touch today for <br /> your free consultation.</p>

        </div>
      </section>




      <section className="contact_form my-5 px-5">
        <div className="container pos_Ab">
          <div className="row">


            <div className="col-md-8 mb-3">
              <div className="container">

                <div className="container mb-5">
                  <h3> <i class="bi bi-chat-left pe-2"></i> Get Your Free Consultation</h3>
                  <p>Fill Out the form below and we'll contact you within 24 hours</p>
                </div>


                {/* <form className="row g-3">
                <div className="col-md-6">
                  <label for="inputEmail4" className="form-label">Full Name *</label>
                  <input type="text" required className="form-control" placeholder="Your full name" id="inputEmail4" />
                </div>
                <div className="col-md-6">
                  <label for="inputPassword4" className="form-label">Email *</label>
                  <input type="email" required className="form-control" placeholder="your@email.com" id="inputPassword4" />
                </div>
                <div className="col-md-6">
                  <label for="inputPassword5" className="form-label">Phone Number</label>
                  <input type="number" className="form-control" placeholder="Your phone number" id="inputPassword5" />
                </div>
                <div className="col-md-6">
                  
                                  <label for="select_interest" className="form-label">Service of Interest *</label>
                <select class="form-select" id="select_interest" required aria-label="Default select example">
                  <option selected>Select a service </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Tell us about your needs</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Describe yourbusiness needs and how we can help you..." rows="3"></textarea>
                </div>

                <div className="col-12 w-100">
                  <Button type="submit" className="btn btn-primary w-100"> <i class="bi bi-send px-2"></i> Get Free Consultation</Button>
                </div>
              </form> */}

                <form className="row g-3" onSubmit={sendEmail}>
                  <div className="col-md-6">
                    <label htmlFor="fullName" className="form-label">Full Name *</label>
                    <input type="text" name="fullName" required className="form-control" placeholder="Your full name" id="fullName" />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email *</label>
                    <input type="email" name="email" required className="form-control" placeholder="your@email.com" id="email" />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input type="text" name="phone" className="form-control" placeholder="Your phone number" id="phone" />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="service" className="form-label">Service of Interest *</label>
                    <select className="form-select" id="service" name="service" required>
                      <option value="">Select a service</option>
                      <option value="Tax Filing">Tax Filing</option>
                      <option value="Accounting">Accounting</option>
                      <option value="Consultation">Consultation</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Tell us about your needs</label>
                    <textarea className="form-control" name="message" id="message" placeholder="Describe your business needs and how we can help you..." rows="3"></textarea>
                  </div>

                  <div className="col-12 w-100">
                    <Button type="submit" className="btn btn-primary w-100">
                      <i className="bi bi-send px-2"></i> Get Free Consultation
                    </Button>
                  </div>
                </form>


              </div>
            </div>

            <div className="col-md-4">
              <div className="git">
                <h5 >Get in touch</h5>
              </div>
              <div className="container ">



                <div className="">

                  <ul className="px-3">

                    <ul className="mb-3 pt-4">
                      <li><i class="bi bi-telephone px-2"> </i> <b>Call Us Now</b></li>
                      <li>07466 390 181</li>
                      <li>0203 978 1860</li>
                    </ul>

                    <ul className="my-3 ">
                      <li><i class="bi bi-envelope px-2"> </i> <b>Email</b></li>
                      <li>info@armodias.co.uk</li>
                    </ul>

                    <ul className="my-3">
                      <li><i class="bi bi-geo-alt px-2"> </i> <b>Office</b></li>
                      <li>400 Pavilion Drive</li>
                      <li>Northampton, NN4 7Pa</li>
                    </ul>

                    <ul className="my-3 pb-4">
                      <li><i class="bi bi-clock px-2"></i> <b> Response Time</b></li>
                      <li>Within 24 hours guaranteed</li>
                    </ul>

                  </ul>

                </div>


              </div>

              <div className="container p-4 mt-4 call_email">
                <Button className="w-100 mb-3"><i class="bi bi-telephone px-2"> </i> Call: 07466 390181</Button>
                <Button className="w-100 "><i class="bi bi-envelope px-2"> </i> Email Us</Button>
              </div>

              <div className="container p-4 mt-4 call_email">
                <h4>Why Choose Armodias?</h4>
                <ul>
                  <li><i class="bi bi-check-circle text-success pe-2"></i> 24-hour response guarantee</li>
                  <li><i class="bi bi-check-circle text-success pe-2"></i> Expert professional service</li>
                  <li><i class="bi bi-check-circle text-success pe-2"></i> Free consultation</li>
                  <li><i class="bi bi-check-circle text-success pe-2"></i> 1924+ business supported</li>
                </ul>
              </div>

            </div>



          </div>
        </div>
      </section>


      <section className="prr mt-5 py-5">
        <div className="container text-center">
          <h2 className="mb-3"><b>Professional. Responsive. Reliable</b></h2>
          <p>Don't let unresponsive accountants slow down your business. Experience the Armodias difference today.</p>
          <div className="w-100 mt-5 text-center">
            <div className="w-50 m-auto py-4 rGrant">

              <h3>100% Response Guarantee</h3>
              <p>We'll contact you within 24 hours - guaranteed</p>
            </div>
          </div>

        </div>
      </section>


    </>
  );
}

export default Contact;
