import { Container, Row, Col, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./MainPage.css";
import VepAttendee from "../assets/VEPAttendee.png";
import BizSms from "../assets/BizSMS.png";
import OrderingPlatform from "../assets/OrderingPlatform.png";
import CaseNote from "../assets/CaseNote.png";

function MainPage() {
  const [backgroundImage, setBackgroundImage] = useState();
  const [showCardOne, setShowCard] = useState(false);
  const [showCardTwo, setshowCardTwo] = useState(false);
  const [showCardThree, setshowCardThree] = useState(false);
  const [showCardFour, setshowCardFour] = useState(false);

  const ProjectOne = () => {
    // Change the background image URL when the card is clicked
    setBackgroundImage(VepAttendee); // Replace with the actual image URL
    setShowCard(!showCardOne);
    setshowCardTwo(true);
    setshowCardThree(true);
    setshowCardFour(true);
  };

  const ProjectTwo = () => {
    // Change the background image URL when the card is clicked
    setBackgroundImage(BizSms); // Replace with the actual image URL
    setshowCardTwo(!showCardTwo);
    setShowCard(true);
    setshowCardThree(true);
    setshowCardFour(true);
  };
  const ProjectThree = () => {
    // Change the background image URL when the card is clicked
    setBackgroundImage(OrderingPlatform); // Replace with the actual image URL
    setshowCardThree(!showCardThree);
    setshowCardTwo(true);
    setShowCard(true);
    setshowCardFour(true);
  };
  const ProjectFour = () => {
    // Change the background image URL when the card is clicked
    setBackgroundImage(CaseNote); // Replace with the actual image URL
    setshowCardFour(!showCardFour);
    setshowCardThree(true);
    setshowCardTwo(true);
    setShowCard(true);
  };

  return (
    <Container fluid className="main-container">
      <img
        src={backgroundImage}
        style={{
          position: "absolute",
          opacity: showCardOne ? 0 : 1,
          transition: "opacity 0.5s ease-in-out",
          zIndex: "0",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          height: "100vh",
        }}
      />
      <img
        src={backgroundImage}
        style={{
          position: "absolute",
          opacity: showCardTwo ? 0 : 1,
          transition: " opacity 0.5s ease-in-out",
          zIndex: "0",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          height: "100vh",
        }}
      />
      <img
        src={backgroundImage}
        style={{
          position: "absolute",
          opacity: showCardThree ? 0 : 1,
          transition: " opacity 0.5s ease-in-out",
          zIndex: "0",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          height: "100vh",
        }}
      />
      <img
        src={backgroundImage}
        style={{
          position: "absolute",
          opacity: showCardFour ? 0 : 1,
          transition: " opacity 0.5s ease-in-out",
          zIndex: "0",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          height: "100vh",
        }}
      />
      {/* developer's quote START */}
      <Row className="main-row">
        <Col className="main-col">
          <div className="main-quote">
            <Row>
              <Col>
                <p>Keep it lean,</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>mean and simple.</p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      {/* developer's quote END */}

      {/* developer's Projects START */}
      <Row className="projects-row">
        <Col className="projects-col">
          <Row>
            {/* developer's 1st Projects START */}
            <Col>
              <Card className="project-1-card" onClick={ProjectOne}>
                <Card.Body className="project-1-cardbody">
                  <Card.Title>Virtual Event Platform</Card.Title>
                  <Card.Text>
                    Virtual Event Platform with independent multiple events.
                    Admin and Attendee Consoles. Watch admin-uploaded videos,
                    real-time chat for attendees.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* developer's 1st Projects END */}

            <Col>
              <Card className="project-2-card" onClick={ProjectTwo}>
                <Card.Body className="project-2-cardbody">
                  <Card.Title style={{ color: "white" }}>Biz-SMS</Card.Title>
                  <Card.Text style={{ color: "white" }}>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="project-3-card" onClick={ProjectThree}>
                <Card.Body className="project-3-cardbody">
                  <Card.Title>Ordering Platform</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="project-4-card" onClick={ProjectFour}>
                <Card.Body className="project-4-cardbody">
                  <Card.Title>Casenote-MD</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* developer's Projects END */}
    </Container>
  );
}

export default MainPage;
