import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return <>
    <nav className="navbar navbar-expand-md bg-transparent  ">
      <div className="container-fluid ">
        <Link className="navbar-brand" to="/">
        <h3  className='colored fw-bold '>Gym</h3>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/Programs">Programs</Link>
            </li>
         

          </ul>
  

        </div>
      </div>
    </nav>
  </>
}
