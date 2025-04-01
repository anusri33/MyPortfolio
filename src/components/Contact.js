import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <p style={{ color: "black", fontSize: "18px", marginBottom: "10px" }}>
                    Feel free to reach out — I'm happy to connect!
                  </p>
                  <p style={{ color: "black", fontWeight: "600", marginBottom: "20px" }}>
                    📧 Email: <span style={{ textDecoration: "underline" }}>anusreemettala@gmail.com</span>
                  </p>
                  <a
                    href="mailto:anusreemettala@gmail.com"
                    style={{
                      display: "inline-block",
                      backgroundColor: "#6f908d",
                      color: "white",
                      padding: "14px 28px",
                      borderRadius: "20px",
                      fontWeight: "600",
                      textDecoration: "none"
                    }}
                  >
                    Email Me
                  </a>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>

        <Row className="align-items-center mt-4">
          <Col size={12} className="text-center">
            <p style={{ color: "black"}}>Portfolio By Anusri Mettala 💻</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
