import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Code Guardian",
      description: "A tool designed to enhance code security by identifying vulnerabilities in JavaScript projects.",
      github: "https://github.com/anusri33/code-guardian"
    },
    {
      title: "Smart Email Assistant",
      description: "An intelligent email management system that categorizes and prioritizes emails using machine learning algorithms.",
      github: "https://github.com/anusri33/smart-email-assistant"
    },
    {
      title: "Movie Recommendation System",
      description: "A system that provides personalized movie recommendations based on user preferences and viewing history.",
      github: "https://github.com/anusri33/Movie-recommendation-system"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 className="text-center">Projects</h2>
                  <p className="text-center mb-4">
                    Explore my recent work — designed to solve real-world problems using full-stack engineering, Generative AI, and smart design.
                  </p>
                  <Row>
                    {projects.map((project, index) => (
                      <Col md={6} lg={4} className="mb-4" key={index}>
                        <div className="flip-card">
                          <div className="flip-card-inner">
                            <div className="flip-card-front d-flex align-items-center justify-content-center">
                              <h5 className="text-center fw-bold">{project.title}</h5>
                            </div>
                            <div className="flip-card-back text-center">
                              <p className="mb-3">{project.description}</p>
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-outline-light"
                              >
                                View on GitHub
                              </a>
                            </div>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
