import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import { useState, useEffect } from 'react';
import "./LoadingPage.css";

function LoadingPage() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress((prevProgress) => prevProgress + 1);
      } else {
        clearInterval(interval);
        window.location.assign("/mainpage");
      }
    }, 50); // Adjust the interval as needed for a smooth animation

    return () => {
      clearInterval(interval);
    };
  }, [progress]);
  return (
    <Container fluid className="custom-container">

      <Row className="custom-row">
        <Col className="custom-col">
          <ProgressBar now={progress} />
        </Col>
      </Row>

      <Row className="custom-row">
        <Col className="custom-col">
          <p className="welcome">Welcome to my Portfolio </p>
        </Col>
      </Row>

      <Row className="custom-row">
        <Col className="custom-col">
          <p className="Name">Rysal Raven M. Rites</p>
        </Col>
      </Row>

      <Row className="custom-row">
        <Col className="custom-col">
          <p className="developer">Front-End Developer</p>
        </Col>
      </Row>
    </Container>
  );
}

export default LoadingPage;
