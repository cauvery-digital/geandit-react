import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
  <div>
      <footer>
  
  {/*<!-- Footer Start--> */}
  <div className="footer-main" style={{ backgroundImage: "url(assets/img/shape/footer_bg.png)" }} >
   <div className="footer-area footer-padding">
       <div className="container">
           <div className="row d-flex justify-content-between">
               <div className="col-lg-3 col-md-4 col-sm-8">
                  <div className="single-footer-caption mb-50">
                    <div className="single-footer-caption mb-30">
                         {/* <!-- logo --> */}
                        <div className="footer-logo">
                            <a href="/"><img src="assets/img/logo/logo2_footer.png" alt=""/></a>
                        </div>
                        <div className="footer-tittle">
                            <div className="footer-pera">
                                <p className="info1">9B, Keshav Complex,<br/> Cross Road,<br/> Dhansura - 383310</p>
                                <p className="info2">info@yourdomain.com</p>
                           </div>
                        </div>
                        <div className="footer-social">
                           <a href="#"><i className="fab fa-facebook-f"></i></a>
                           <a href="#"><i className="fab fa-twitter"></i></a>
                           <a href="#"><i className="fas fa-globe"></i></a>
                           <a href="#"><i className="fab fa-behance"></i></a>
                       </div>
                    </div>
                  </div>
               </div>
               <div className="col-lg-2 col-md-4 col-sm-5">
                   <div className="single-footer-caption mb-50">
                       <div className="footer-tittle">
                           <h4>Quick Links</h4>
                           <ul>
                               <li><a href="/about">About</a></li>
                               <li><a href="/services">Features</a></li>
                               <li><a href="/pricing">Pricing</a></li>
                               <li><a href="/blog">Blog</a></li>
                               <li><a href="/contact">Contact</a></li>
                           </ul>
                       </div>
                   </div>
               </div>
               <div className="col-lg-2 col-md-4 col-sm-7">
                   <div className="single-footer-caption mb-50">
                       <div className="footer-tittle">
                           <h4>Support</h4>
                           <ul>
                               <li><a href="/privacypolicy">Privacy Policy</a></li>
                               <li><a href="/termsandconditions">Terms & Conditions</a></li>
                               <li><a href="/sitemap">Sitemap</a></li>
                               <li><a href="/faqs">FAQs</a></li>
                               <li><a href="#">Report a bug</a></li>
                           </ul>
                       </div>
                   </div>
               </div>
               <div className="col-lg-3 col-md-4 col-sm-5">
                   <div className="single-footer-caption mb-50">
                       <div className="footer-tittle">
                           <h4>Core Features</h4>
                           <ul>
                            <li><a href="#">Email Marketing</a></li>
                            <li><a href="#"> Offline SEO</a></li>
                            <li><a href="#">Social Media Marketing</a></li>
                            <li><a href="#">Lead Generation</a></li>
                            <li><a href="#"> 24/7 Support</a></li>
                        </ul>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </div>
   {/* <!-- footer-bottom aera --> */}
   <div className="footer-bottom-area footer-bg">
       <div className="container">
           <div className="footer-border">
                <div className="row d-flex align-items-center">
                    <div className="col-xl-12 ">
                        <div className="footer-copy-right text-center">
                            <p>Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="ti-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
  </p>
                        </div>
                    </div>
                </div>
           </div>
       </div>
   </div>
  </div>
  
  </footer>
  </div>
    )
}

export default Footer
