
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Button from "react-bootstrap/Button";
import brand from "./logo/brand.png"


function Navbar() {
  return (
<>

<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid col-md-10 col-12">
    <img className="me-4 my-logo" src={brand} width={"115px"} alt="brand" />
    <NavLink className="navbar-brand fw-bold fs-3" to="#">
        Armodias <br />
         <h6>EXPERT TAX * SOUND FINANCE</h6>
         </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto pe-5 me-5 mb-2 mb-lg-0">

        <li className="nav-item">
          <NavLink className="nav-link"  to="/">Home</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/services">Services</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link"  to="/contact">Contact</NavLink>
        </li>

        <li className="nav-item">
           <Button className="nav-link ps-3 pe-3 getQ" size="sm"  variant="primary">Get Quote</Button>
        </li>

      </ul>
     
    </div>
  </div>
</nav>








    {/* // <nav>
    //   <Link to="/">Home</Link>
    //   <Link to="/about">About</Link>
    //   <Link to="/services">Services</Link>
    //   <Link to="/contact">Contact</Link>
    // </nav>
     */}
    
    
    </>
  );
}

export default Navbar;
