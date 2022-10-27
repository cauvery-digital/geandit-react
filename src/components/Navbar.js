import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
        <header>
       <div className="header-area header-transparrent ">
            <div className="main-header header-sticky">
                <div className="container">
                    <div className="row align-items-center">
                        {/*<!-- Logo --> */}
                        <div className="col-xl-2 col-lg-2 col-md-1">
                            <div className="logo">
                            <Link to="/"><img src="assets/img/logo/logo.png" alt=""/></Link>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-8">
                            {/*<!-- Main-menu --> */}
                            <div className="main-menu f-right d-none d-lg-block">
                                <nav> 
                                    <ul id="navigation">    
                                        <li><Link to="/"> Home</Link></li>
                                        <li><Link to="/about">About Us</Link></li>
                                        <li><Link to="/services">Services</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                        <li><Link to="/">Blog</Link>
                                            <ul className="submenu">
                                                <li><Link to="/blog">Blog</Link></li>
                                                <li><Link to="/blogdetailpage">Blog Details</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>             
                        <div className="col-xl-2 col-lg-2 col-md-3">
                            <div className="header-right-btn f-right d-none d-lg-block">
                            <Link to="/contact" className="btn header-btn">Contact Us</Link>
                            </div>
                        </div>
                        {/* <!-- Mobile Menu --> */}
                        <div className="col-12">
                            <div className="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>
            </div>
       </div>
        
    </header>
    </div>
  )
}

export default Navbar