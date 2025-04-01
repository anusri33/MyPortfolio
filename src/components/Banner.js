import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <div className="overlay-container">
      <div style={{
  position: 'absolute',
  top: '20px',
  right: '30px',
  zIndex: 10
}}>
  <a
  href="/AnusriMettalaResume.pdf"
  download
  target="_blank"
  style={{
    backgroundColor: '#e08a7d',
    color: 'white',
    padding: '10px 18px',
    borderRadius: '8px',
    fontWeight: 600,
    textDecoration: 'none',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
  }}
>
  ⬇️ Resume
</a>

</div>

      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={5}>
            <div className="oval-image-wrapper">
              <img src={headerImg} alt="Header" className="vertical-oval-image" />
            </div>
          </Col>
          <Col xs={12} md={6} xl={7}>
  <TrackVisibility>
    {({ isVisible }) =>
      <div>
        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
          <h1>Hi! I'm <span className="highlight-name">Anusri Mettala</span></h1>
          <p className="bio">
            I’m a creative problem-solver and tech enthusiast pursuing my Master’s in Computer Science at Purdue University Indianapolis.
            <br /><br />
            My experience spans full-stack development, cloud-native deployment, RESTful APIs, and DevOps practices — with a deep passion for crafting user-friendly, scalable software.
            <br /><br />
            I've contributed to projects across EdTech, banking, and research, turning complex challenges into intuitive tools.
            <br /><br />
            When I’m not coding, I explore UI/UX, improve workflows, and brainstorm ideas that make lives better.
            <br /><br />
            <strong>Let’s build something impactful together.</strong>
          </p>
        </div>
      </div>
    }
  </TrackVisibility>
</Col>

        </Row>
      </Container>
      </div>
    </section>
  );
};
