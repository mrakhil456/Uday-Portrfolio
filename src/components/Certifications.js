import React from 'react'
import './styles/Certifications.css';

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <h2>My Certifications</h2>
        <div className="certifications-container">
        <ul>
            <li>
          <div className="certifications-cards">
            <div className="certifications-card">
            <h3> SQL for Data Analytics </h3>
            <p></p>
            <p></p>
            <p>  </p>
            <p>L&T Edutech</p>
            
            </div>
            <div className="button">
            <a href="/Certificate1.jpg" className="btn " id='btn-c'>View Certificate</a>
            </div>
          </div>
          
          </li>
          <li>
            <div className="certifications-cards">
          <div className="certifications-card">
            <h3> Responsive Web Design: HTML, CSS, JavaScript, and Bootstrap5</h3>
            <p>L&T Edutech</p>
             
          </div>
          <div className="button">
            <a href="/Certificate2.jpg" className="btn " id='btn-c'>View Certificate</a>
            </div>
            </div>
            </li>
           
          <li>
            <div className="certifications-cards">
          <div className="certifications-card">
            <h3> IBM Python 101 for Data Science</h3>
            <p>IBM SkillsBuild</p>
            <p>Issued October 2, 2024</p>    
          </div>
          <div className="button">
            <a href="/Certificate4.jpg" className="btn " id='btn-c'>View Certificate</a>
            </div>
          </div>
          </li>
          <li>
            <div className="certifications-cards">
          <div className="certifications-card">
            <h3>Introduction To Software Engineering </h3>
            <p>Coursera</p>
            <p>Issued March 22, 2025</p> 
          </div>
          <div className="button">
            <a href="/Certificate3.jpg" className="btn " id='btn-c'>View Certificate</a>
            </div>
          </div>
            </li>
            <li>
              
            
          </li>
        </ul>
        </div>  
        </div>
        </section>

    )
}

export default Certifications
