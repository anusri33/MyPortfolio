import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { motion } from 'framer-motion';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 6 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  const categorizedSkills = {
    Languages: ['Python', 'Java', 'Golang', 'C#', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'ReactJS', 'NodeJS', 'Spring Boot', 'RESTful API', 'Gin'],
    Databases: ['MySQL', 'PL/SQL', 'PHP'],
    DevOps: ['Docker', 'Jenkins', 'Git', 'Kubernetes', 'JSON', 'GitHub', 'Bitbucket', 'AWS'],
    Tools: ['Visual Studio', 'VS Code', 'SQL Workbench', 'Postman', 'Jest', 'Junit', 'Microsoft Excel', 'WordPress', 'Unit Testing', 'Wireshark'],
    'Product Management': ['Product Lifecycle Management', 'Jira', 'Notion', 'Scrum', 'Agile', 'PowerPoint', 'MS Office', 'Data Analysis', 'SDLC']
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-4">
            <motion.h2 
              className="fw-bold" 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }}
            >
              Skills
            </motion.h2>
            <motion.p 
              className="skills" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              A showcase of technologies, tools, and methodologies I'm skilled in across full stack development, DevOps, and product management.
            </motion.p>
          </div>
          {Object.entries(categorizedSkills).map(([category, skills], index) => (
            <div className="col-12 mb-5" key={index}>
              <motion.h4 
                className="mb-3 text-secondary" 
                initial={{ opacity: 0, x: -30 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.5 }}
              >
                {category}
              </motion.h4>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                {skills.map((skill, idx) => (
                  <motion.div 
                    className="item p-3 text-center bg-white shadow rounded mx-2" 
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h5 className="skill-pill">{skill}</h5>
                  </motion.div>
                ))}
              </Carousel>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};