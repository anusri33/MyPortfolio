import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

export const ExperienceCertification = () => {
  const experiences = [
    {
      role: "Web Programmer",
      company: "The Polis Center, Indiana University",
      duration: "May 2024 – Present",
      description: [
        "Engineered secure and scalable backend services using Golang and Gin to optimize user authentication flows (signup, login, password reset, verification). Structured clean, maintainable code with modular backend layers and GORM-integrated Microsoft SQL Server. Implemented JWT-based session management and automated CI/CD pipelines using GitHub Actions and Kubernetes, accelerating deployments and reducing onboarding time by 40%. Confident in building secure, testable, and production-ready systems in agile, fast-paced environments."
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Indiana University – Comet Lab",
      duration: "Jan 2024 – Present",
      description: [
        "Developed full-stack web applications for small vendors using Java, ReactJS, JavaScript, MySQL.",
        "Created a Project Management System in C# supporting task tracking, collaboration, and reporting.",
        "Built responsive, accessible UIs with Bootstrap and Material UI for cross-device compatibility.",
        "Collaborated with faculty and student teams to deliver scalable vendor-specific tools reducing manual operations by 40%."
      ]
    },
    {
      role: "Research Assistant",
      company: "Indiana University – Health Informatics",
      duration: "Oct 2023 – May 2024",
      description: [
        "Conducted a study analyzing job readiness of health informatics graduates using ML techniques.",
        "Built models assessing skill levels from workforce survey data to support new certification design.",
        "Visualized findings using Tableau and Python libraries for clear communication with stakeholders."
      ]
    },
    {
      role: "Application Developer",
      company: "DBS Bank",
      duration: "Jul 2022 – Aug 2023",
      description: [
        "Contributed to full-stack banking applications supporting secure transactions and user onboarding. Built scalable Spring Boot microservices with Spring Data JPA and Hibernate, ensuring efficient data access. Enhanced UI experiences with ReactJS, TypeScript, and Material UI. Integrated semantic search using Elasticsearch and NLP to empower 250+ users with intelligent documentation queries. Optimized backend performance, improved SQL efficiency, and streamlined deployments via CI/CD. Collaborated cross-functionally to deliver compliant, scalable, and customer-centric features."
      ]
    }
  ];

  const certifications = [
    { name: "Cisco Networking Academy® Program", issuer: "Cisco" },
    { name: "Python for Everyone", issuer: "Coursera" },
    { name: "EPAM PEP Trainee Program", issuer: "EPAM" },
    { name: "Artificial Intelligence with Machine Learning in Java", issuer: "Oracle" }
  ];

  const hackathons = [
    {
      name: "HackIndy 2025",
      organizer: "Purdue Indy Computer Science Club",
      year: "2025",
      description: "Participated in this 4-day hackathon organized by the Purdue Indy CS Club, collaborating with peers to develop innovative solutions and enhance technical skills."
    },
    {
      name: "DBS Hack2Hire 2022",
      organizer: "DBS Bank",
      year: "2022",
      description: "Engaged in DBS Bank's Hack2Hire virtual hackathon, showcasing technical abilities in areas such as cloud computing and machine learning. Successfully advanced through the hackathon and interview stages, resulting in a job offer from DBS Bank."
    }
  ];

  const conferences = [
    {
      name: "Grace Hopper Celebration (GHC)",
      year: "2024",
      organizer: "AnitaB.org",
      description: "Attended the world's largest gathering of women in computing, networking with tech leaders, participating in workshops, and exploring career opportunities across top tech firms."
    }
  ];

  return (
    <section className="experience-section" id="experience">
      <Container>
        <Row>
          <Col md={12} className="text-center mb-5">
            <motion.h2 className="fw-bold" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              Experience, Certifications, Hackathons & Conferences
            </motion.h2>
          </Col>
        </Row>

        {/* Professional Experience */}
        <Row className="mb-5">
          <Col md={12}>
            <h4 className="text-secondary mb-3">Professional Experience</h4>
            {experiences.map((exp, index) => (
              <motion.div className="mb-4 bg-light text-dark p-4 rounded shadow-sm" key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }}>
                <h5 className="fw-bold mb-1">{exp.role}</h5>
                <p className="mb-1"><strong>{exp.company}</strong> <span className="text-muted">| {exp.duration}</span></p>
                <ul>
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </Col>
        </Row>

        {/* Certifications */}
        <Row className="mb-5">
          <Col md={12}>
            <h4 className="text-secondary mb-3">Certifications & Apprenticeship</h4>
            {certifications.map((cert, index) => (
              <motion.div className="mb-3 p-3 bg-white text-dark border-start border-4 border-primary rounded" key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: index * 0.2 }}>
                <h6 className="mb-1 fw-semibold">{cert.name}</h6>
                <p className="mb-0"><small>{cert.issuer}</small></p>
              </motion.div>
            ))}
          </Col>
        </Row>

        {/* Hackathons */}
        <Row className="mb-5">
          <Col md={12}>
            <h4 className="text-secondary mb-3">Hackathons</h4>
            {hackathons.map((hack, index) => (
              <motion.div className="mb-3 p-3 bg-cream text-dark border-start border-4 border-warning rounded hackathon-card" key={index} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: index * 0.2 }}>
                <h6 className="mb-1 fw-semibold">{hack.name}</h6>
                <p className="mb-1"><small>{hack.organizer} &mdash; {hack.year}</small></p>
                <p className="mb-0">{hack.description}</p>
              </motion.div>
            ))}
          </Col>
        </Row>

        {/* Conferences */}
        <Row>
          <Col md={12}>
            <h4 className="text-secondary mb-3">Conferences</h4>
            {conferences.map((conf, index) => (
              <motion.div className="mb-3 p-3 bg-white text-dark border-start border-4 border-info rounded" key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: index * 0.2 }}>
                <h6 className="mb-1 fw-semibold">{conf.name}</h6>
                <p className="mb-1"><small>{conf.organizer} &mdash; {conf.year}</small></p>
                <p className="mb-0">{conf.description}</p>
              </motion.div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};