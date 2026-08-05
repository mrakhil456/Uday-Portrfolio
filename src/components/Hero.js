import { motion } from 'framer-motion';
import developerImage from '../assets/images/developer.jpeg';
import './styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Hi, I'm Uday Pratap Singh</h1>
            <p>
              Ambitious and adaptable pursuing a Bachelor's degree in Computer Science and Engineering(DS+AI). Possessing strong interpersonal skills and a passion for Data Analyst. With a keen eye for detail and a commitment to excellence, I thrive in collaborative environments and am always eager to learn and grow.

            </p>
            <div className="btn-container">
              <a href="#projects" className="btn " id='btn-c'>View My Work</a>
              <a href="/Resume1.pdf" className="btn " id='btn-c'>Resume</a>
              <a href="#contact" className="btn " id='btn-c'>Contact Me</a>
            </div>
          </motion.div>
          
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}

          >
            <img src={developerImage} alt="Developer" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;