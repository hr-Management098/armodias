import { NavLink } from "react-router-dom";
import brand from "./logo/brand.png"
function Footer (){
    
    
    return(
        <>
        
        
      <section className="footer">

        {/* <!-- Footer --> */}
        <footer className="text-center text-lg-start bg-body-tertiary text-muted">

          {/* <!-- Section: Links  --> */}
          <section className="">
            <div className="container text-center text-md-start py-5 ">
              {/* <!-- Grid row --> */}
              <div className="row pt-3">
                {/* <!-- Grid column --> */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* <!-- Content --> */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    {/* <i className="fas fa-gem me-3"></i>Company name */}
                    <img className=" " src={brand} width={"100px"} alt="brand" />
                    <NavLink className="navbar-brand fw-bold fs-3" to="#">
                      Armodias LTD <br />
                      <h6>EXPERT TAX * SOUND FINANCE</h6>
                    </NavLink>
                  </h6>
                  <p>
                    Expert Tax, Sound Finance - we prioritize YOU. Professional accounting and financial services with quick, reliable responses to all your business needs.
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 ft_head">
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    Quick Links
                  </h6>
                  <p>
                    <a href="/" className="text-reset">Home</a>
                  </p>
                  <p>
                    <a href="/services" className="text-reset">Services</a>
                  </p>
                  <p>
                    <a href="/about" className="text-reset">About</a>
                  </p>
                  <p>
                    <a href="/contact" className="text-reset">Contact</a>
                  </p>
                </div>

                {/* <!-- Grid column --> */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 ft_head">
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p><i class="bi bi-telephone fs-5 pe-3"></i>07466 390181 <br /> &nbsp; &nbsp; &nbsp; &nbsp; 0203 978 1860</p>
                  <p>
                    <i class="bi bi-envelope fs-5 pe-3 "></i>
                    info@armodias.co.uk
                  </p>
                  <p><i class="bi bi-geo-alt fs-5 pe-3"></i> 400 Pavilion Drive, <br /> &nbsp; &nbsp; &nbsp; &nbsp; Northampton, NN4 7PA</p>
                  
                </div>
                
              </div>
            
            </div>
          </section>
         

          {/* <!-- Copyright --> */}
          <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)", borderTop:"1px solid grey" }} >
            © 2024 Armodias Ltd. 
            <a className="text-reset fw-bold" href="https://mdbootstrap.com/"> All rights reserved</a>
          </div>

        </footer>
        


      </section>



        
        </>
    );
};


export default Footer;