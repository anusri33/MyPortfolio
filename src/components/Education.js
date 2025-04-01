import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Education = () => {
  const educationDetails = [
    {
      degree: "M.S. in Computer Science",
      institution: "Purdue University, Indianapolis",
      duration: "Aug 2023 – May 2025",
      highlights: [
        "Course Work: Advanced Database Concept, Algorithms’ Design and Analysis, Software Engineering, Data Structures and Algorithms, Computer Networks, Cloud Computing, Visual Design, Introduction to Data Science, Security Engineering, Software Quality Assurance."
      ]
    },
    {
      degree: "B.Tech in Computer Science",
      institution: "Jawaharlal Nehru Technological University",
      duration: "Aug 2018 – May 2022",
      highlights: [
        "Graduated with Distinction.",
        "Built projects in Java, Python, and full-stack web development.",
        "Completed capstone project on real-time Bird species classification using ML models."
      ]
    }
  ];

  return (
    <section className="education-section" id="education">
      <Container>
        <Row>
          <Col md={12} className="text-center mb-5">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeInDown" : ""}>
                  <h2 className="fw-bold text-edu-title">Education</h2>
                  <p className="text-muted">Academic background & relevant coursework</p>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
        <Row>
          {educationDetails.map((edu, index) => (
            <Col md={6} key={index} className="mb-4">
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={`edu-card p-4 rounded shadow-sm bg-white ${isVisible ? "animate__animated animate__fadeInUp" : ""}`}>
                    <h5 className="text-edu-degree mb-1 fw-bold">{edu.degree}</h5>
                    <p className="text-edu-school mb-1"><strong>{edu.institution}</strong></p>
                    <p className="text-muted mb-3">{edu.duration}</p>
                    <ul className="edu-highlights ps-3">
                      {edu.highlights.map((point, idx) => (
                        <li key={idx} className="text-dark">{point}</li>
                      ))}
                    </ul>
                  </div>
                }
              </TrackVisibility>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
