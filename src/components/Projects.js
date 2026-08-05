import { motion } from 'framer-motion';
import project1 from '../assets/images/Project1.jpeg';
import project2 from '../assets/images/Project2.jpg';
//import project3 from '../assets/images/Project3.png';
//import project4 from '../assets/images/Project4.png';
import './styles/Projects.css';

const projects = [
  {
    id: 1,
    title: 'Hospital Emergency Room Dashboard',
    description: ' The objective of this project was to design an interactive Hospital Emergency Room Dashboard using Microsoft Excel to monitor and analyze key hospital performance indicators.',
    image: project1,
    
    demo: ' https://docs.google.com/spreadsheets/d/19WOl83iOOleyVN4wX0yv_Sy5Wl_a52xD/edit?usp=drivesdk&ouid=116919479117066885636&rtpof=true&sd=true'
  },
  {
    id: 2,
    title: 'Automatic Firefighting System using Arduino Uno ',
    description: ' The objective of this project is to design and develop an Arduino Uno-based Automatic Firefighting System capable of detecting fire at an early stage using flame and smoke sensors.',
    image: project2,
    
    demo: 'https://docs.google.com/presentation/d/1XANBK2ZcS26txwsbqksC-WQeaD-1Dk7J/edit?usp=drivesdk&ouid=116919479117066885636&rtpof=true&sd=true'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  {/*<a href={project.github} className="btn" id='btn-d' target="_blank" rel="noreferrer">GitHub</a>*/}
                  <a href={project.demo} className="btn btn-outline"id='btn-d' target="_blank" rel="noreferrer">Open</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;