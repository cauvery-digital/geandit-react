import { findDOMNode} from 'react-dom';

import './App.css';
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Home from './pages/Home';
// import Projectcontact from './components/Projectcontact';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Blogdetailpage from './pages/Blogdetailpage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import Sitemap from './pages/Sitemap';
import FAQs from './pages/FAQs';
import Pricing from './pages/Pricing';

function App() {
  return (
      <>
      <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services" element={<Services/>} />        
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/blogdetailpage" element={<Blogdetailpage/>} />
        <Route path="/pricing" element={<Pricing/>} />        
        <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
        <Route path="/termsandconditions" element={<TermsAndConditions/>} />
        <Route path="/sitemap" element={<Sitemap/>} />
        <Route path="/faqs" element={<FAQs/>} /> 
      </Routes>
      </Router>
      <Footer/>
      </>
  );
}

export default App;
