import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
//import LOGO1 from '../assets/images/AKS.png';
import './styles/Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const [activeHeader, setActiveHeader] = useState("home");
  const handleTabClick = (tab) => {
    setActiveHeader(tab);
    setIsOpen(false);
  };
  return (
    <header className="header">
      <div className="container">
        {/* <img src={LOGO1} alt="LOGO" /> */}
        <a href="/" className="logo">
          UDAY PRATAP SINGH
        </a>
        
        <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
        
          <a id="nav-link"  className={activeHeader === "home" ? "active" : ""}
          onClick={() => handleTabClick("home")}  href="/">Home</a>
          <a id="nav-link" className={activeHeader === "education" ? "active" : ""}
          onClick={() => handleTabClick("education")}  href="#education">Education</a>  
          <a id="nav-link"  className={activeHeader === "projects" ? "active" : ""}
          onClick={() => handleTabClick("projects")}   href="#projects">Projects</a>
          <a id="nav-link" className={activeHeader === "skills" ? "active" : ""}
          onClick={() => handleTabClick("skills")} href="#skills">Skills</a>
          <a id="nav-link" className={activeHeader === "certifications" ? "active" : ""}
          onClick={() => handleTabClick("certifications")}  href="#certifications">Certifications</a>   
          <a id="nav-link" className={activeHeader === "contact" ? "active" : ""}
          onClick={() => handleTabClick("contact")}  href="#contact">Contact</a> 
        </nav>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
};

export default Header;