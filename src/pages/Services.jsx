import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

function Services() {
  return (
    <>




      <section className="our_expert_services py-5">

        <div className="container text-center py-4">
          <div className="text-white">

            <h1 className="">Our Expert Services</h1>
            <p className="fs-5 my-4">Comprehensive financial and accounting solutions designed to support your business <br /> growth and ensure compliance at every step.</p>
          </div>

        </div>

      </section>




      <section className="home_services service_page  py-5">

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
                    
                    <ul>
                      <li><i class="bi bi-check-circle text-success"></i> Businnes registration</li>
                      <li><i class="bi bi-check-circle text-success"></i> Legal compilance</li>
                      <li><i class="bi bi-check-circle text-success"></i> Documentation support</li>
                      <li><i class="bi bi-check-circle text-success"></i> Expert guidance</li>
                    </ul>

                    <Button className="w-100" href="/contact"> Get Started &nbsp; → </Button>

                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 pt-4 pb-2 px-2 cb">
                  <i className="bi bi-calculator-fill"></i>
                  <div className="card-body">
                    <h5 className="card-title my-2">Bookkeeping</h5>
                    <p className="card-text my-3">Keep your finances organized with accurate and timely bookkeeping services</p>
                    
                     
                    <ul>
                      <li><i class="bi bi-check-circle text-success"></i> Daily Transaction recording</li>
                      <li><i class="bi bi-check-circle text-success"></i> Monthly reconciliation</li>
                      <li><i class="bi bi-check-circle text-success"></i> Final reporting</li>
                      <li><i class="bi bi-check-circle text-success"></i> VAT preparation</li>
                    </ul>
                    

                    <Button className="lrnM text-white w-100" href="/contact">Get Started &nbsp; →</Button>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100 pt-4 pb-2 px-2 cb">
                  <i className="bi bi-file-earmark-text"></i>
                  <div className="card-body">
                    <h5 className="card-title my-2">VAT & Payroll</h5>
                    <p className="card-text my-3">Stay compliant and efficient with complete tax and payroll management</p>
                    
                    
                    <ul>
                      <li><i class="bi bi-check-circle text-success"></i> VAT returns</li>
                      <li><i class="bi bi-check-circle text-success"></i> Payroll processing</li>
                      <li><i class="bi bi-check-circle text-success"></i> PAYE compliance</li>
                      <li><i class="bi bi-check-circle text-success"></i> Employee records</li>
                    </ul>
                    
                    
                    <Button className="lrnM text-white w-100" href="/contact">Get Started &nbsp; →</Button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 pt-4 pb-2 px-2 cb">
                  <i className="bi bi-shield-check"></i>
                  <div className="card-body">
                    <h5 className="card-title my-2">Statutory Accounts</h5>
                    <p className="card-text my-3">Prepare and file compliant annual accounts for business</p>
                    
                    
                    <ul>
                      <li><i class="bi bi-check-circle text-success"></i> Annual accountants preparation</li>
                      <li><i class="bi bi-check-circle text-success"></i> Companies House filing</li>
                      <li><i class="bi bi-check-circle text-success"></i> Compliance checks</li>
                      <li><i class="bi bi-check-circle text-success"></i> Professional review</li>
                    </ul>
                    
                    
                    <Button className="lrnM text-white w-100" href="/contact">Get Started &nbsp; →</Button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 pt-4 pb-2 px-2 cb">
                  <i className="bi bi-people"></i>
                  <div className="card-body">
                    <h5 className="card-title my-2">CIS (Construction Industry Scheme)</h5>
                    <p className="card-text my-3">Simplify contractor tax oligations under the Construction industry Scheme.</p>
                    
                    <ul>
                      <li><i class="bi bi-check-circle text-success"></i> CIS registration</li>
                      <li><i class="bi bi-check-circle text-success"></i> Monthly returns</li>
                      <li><i class="bi bi-check-circle text-success"></i> Contractor compliance</li>
                      <li><i class="bi bi-check-circle text-success"></i> Deduction management</li>
                    </ul>
                    
                    <Button className="lrnM text-white w-100" href="/contact">Get Started &nbsp; →</Button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 pt-4 pb-2 px-2 cb">
                  <i className="bi bi-window-desktop"></i>
                  <div className="card-body">
                    <h5 className="card-title my-2">Corporation Tax</h5>
                    <p className="card-text my-3">Ensure accurate tax filings and optimize your coroorate tax position</p>
                    
                    <ul>
                      <li><i class="bi bi-check-circle text-success"></i> Tax computation</li>
                      <li><i class="bi bi-check-circle text-success"></i> CT600 preparation</li>
                      <li><i class="bi bi-check-circle text-success"></i> Tax planning</li>
                      <li><i class="bi bi-check-circle text-success"></i> HMRC liaison</li>
                    </ul>
                    
                    <Button className="lrnM text-white w-100" href="/contact">Get Started &nbsp; →</Button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 pt-4 pb-2 px-2 cb">
                  <i class="bi bi-suitcase-lg"></i>
                  <div className="card-body">
                    <h5 className="card-title my-2">Tax Investigations</h5>
                    <p className="card-text my-3">Navigate audits and inquiries confidently with professional representation.</p>
                    
                    
                    <ul>
                      <li><i class="bi bi-check-circle text-success"></i> HMRC representation</li>
                      <li><i class="bi bi-check-circle text-success"></i> Document preparation</li>
                      <li><i class="bi bi-check-circle text-success"></i> Negotiation support</li>
                      <li><i class="bi bi-check-circle text-success"></i> Penalty mitigation</li>
                    </ul>
                    
                    
                    <Button className="lrnM text-white w-100" href="/contact">Get Started &nbsp; →</Button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 pt-4 pb-2 px-2 cb">
                  <i class="bi bi-graph-up-arrow"></i>
                  <div className="card-body">
                    <h5 className="card-title my-2">Start-up Loans</h5>
                    <p className="card-text my-3">Fuel your business growth with tailored funding solutions and loan guidance.</p>
                    
                    
                    <ul>
                      <li><i class="bi bi-check-circle text-success"></i> Loan application support</li>
                      <li><i class="bi bi-check-circle text-success"></i> Business plan review</li>
                      <li><i class="bi bi-check-circle text-success"></i> Funding Advice</li>
                      <li><i class="bi bi-check-circle text-success"></i> Growth strategies</li>
                    </ul>
                    
                    
                    <Button className="lrnM text-white w-100" href="/contact">Get Started &nbsp; →</Button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 pt-4 pb-2 px-2 cb">
                 <i class="bi bi-bank2"></i>
                  <div className="card-body">
                    <h5 className="card-title my-2">Self-Assessment</h5>
                    <p className="card-text my-3">File personal tax returns efficiently with tailored support.</p>
                     
                    
                    <ul>
                      <li><i class="bi bi-check-circle text-success"></i> Personal tax returns</li>
                      <li><i class="bi bi-check-circle text-success"></i> Income calculation</li>
                      <li><i class="bi bi-check-circle text-success"></i> Allowance optimization</li>
                      <li><i class="bi bi-check-circle text-success"></i> Deadline management</li>
                    </ul>
                    
                    
                    <Button className="lrnM text-white w-100" href="/contact">Get Started &nbsp; →</Button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 pt-4 pb-2 px-2 cb">
                  <i className="bi bi-globe"></i>
                  <div className="card-body">
                    <h5 className="card-title my-2">Visa Applications & Sponsorship</h5>
                    <p className="card-text my-3">Navigate visa processes with professional help for various application types</p>
                    
                    
                    <ul>
                      <li><i class="bi bi-check-circle text-success"></i> Visa applications</li>
                      <li><i class="bi bi-check-circle text-success"></i> Sponsership  licenses</li>
                      <li><i class="bi bi-check-circle text-success"></i> Document preparation</li>
                      <li><i class="bi bi-check-circle text-success"></i> Process guidance</li>
                    </ul>
                    
                    
                    <Button className="lrnM text-white w-100" href="/contact">Get Started &nbsp; →</Button>
                  </div>
                </div>
              </div>

            </div>


          </div>

        </div>

      </section>







    </>
  );
};

export default Services;
