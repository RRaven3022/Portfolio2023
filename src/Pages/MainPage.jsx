import { Container, Row, Col, Card } from "react-bootstrap";
import { useState } from "react";
import "./MainPage.css";
import VepAttendee from "../assets/VEPAttendee.png";
import BizSms from "../assets/BizSMS.png";
import OrderingPlatform from "../assets/OrderingPlatform.png";
import CaseNote from "../assets/CaseNote.png";
import StoreLocator from "../assets/StoreLocator.png";

import ProfilePicture from "../assets/Rites,-Rysal-Raven-M-Raw.png";

import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Ionic from "../assets/ionic.png";
import Javascript from "../assets/js.png";
import Mui from "../assets/mui.png";
import Reactjs from "../assets/react.png";


function MainPage() {
  const [backgroundImage, setBackgroundImage] = useState();
  const [showCardOne, setShowCard] = useState(true);
  const [showCardTwo, setshowCardTwo] = useState(true);
  const [showCardThree, setshowCardThree] = useState(true);
  const [showCardFour, setshowCardFour] = useState(true);
  const [showCardFive, setshowCardFive] = useState(true);
  const [isCardHoveredOne, setIsCardHoveredOne] = useState(false);
  const [isCardHoveredTwo, setIsCardHoveredTwo] = useState(false);
  const [isCardHoveredThree, setIsCardHoveredThree] = useState(false);
  const [isCardHoveredFour, setIsCardHoveredFour] = useState(false);
  const [isCardHoveredFive, setIsCardHoveredFive] = useState(false);

  const CardOneEnter = (e) => {
    setIsCardHoveredOne(true);
    setBackgroundImage(e); // Replace with the actual image URL
    setShowCard(!showCardOne);
  };

  const CardOneLeave = () => {
    setIsCardHoveredOne(false);
    setShowCard(true);
    setshowCardTwo(true);
    setshowCardThree(true);
    setshowCardFour(true);
    setshowCardFive(true);
  };

  const CardTwoEnter = (e) => {
    setIsCardHoveredTwo(true);
    setBackgroundImage(e); // Replace with the actual image URL
    setshowCardTwo(!showCardTwo);
  };

  const CardTwoLeave = () => {
    setIsCardHoveredTwo(false);
    setShowCard(true);
    setshowCardTwo(true);
    setshowCardThree(true);
    setshowCardFour(true);
    setshowCardFive(true);
  };

  const CardThreeEnter = (e) => {
    setIsCardHoveredThree(true);
    setBackgroundImage(e); // Replace with the actual image URL
    setshowCardThree(!showCardThree);
  };

  const CardThreeLeave = () => {
    setIsCardHoveredThree(false);
    setShowCard(true);
    setshowCardTwo(true);
    setshowCardThree(true);
    setshowCardFour(true);
    setshowCardFive(true);
  };

  const CardFourEnter = (e) => {
    setIsCardHoveredFour(true);
    setBackgroundImage(e); // Replace with the actual image URL
    setshowCardFour(!showCardFour);
  };

  const CardFourLeave = () => {
    setIsCardHoveredFour(false);
    setShowCard(true);
    setshowCardTwo(true);
    setshowCardThree(true);
    setshowCardFour(true);
    setshowCardFive(true);
  };

  const CardFiveEnter = (e) => {
    setIsCardHoveredFive(true);
    setBackgroundImage(e); // Replace with the actual image URL
    setshowCardFive(!showCardFive);
  };

  const CardFiveLeave = () => {
    setIsCardHoveredFive(false);
    setShowCard(true);
    setshowCardTwo(true);
    setshowCardThree(true);
    setshowCardFour(true);
    setshowCardFive(true);
  };

  return (
    <Container fluid className="main-container">
      <img
        src={backgroundImage}
        style={{
          position: "absolute",
          opacity: showCardOne ? 0 : 1,
          transition: "opacity 0.5s ease-in-out",
          zIndex: "-1",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
          marginTop:"-73rem"
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
          width: "100%",
          height: "100vh",
          marginTop:"-73rem"
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
          width: "100%",
          height: "100vh",
          marginTop:"-73rem"
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
          width: "100%",
          height: "100vh",
          marginTop:"-73rem"
        }}
      />
      <img
        src={backgroundImage}
        style={{
          position: "absolute",
          opacity: showCardFive ? 0 : 1,
          transition: " opacity 0.5s ease-in-out",
          zIndex: "0",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
          marginTop:"-73rem"
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

        <Col className="main-col2">
          <div className="square"></div>
          <div className="circle2"></div>
          <div className="circle"></div>
          <div className="triangle"></div>

          <img src={ProfilePicture} className="ProfilePicture" />
        </Col>
      </Row>
      {/* developer's quote END */}

      {/* developer's Projects START */}
      <Row className="projects-row">
        <Col className="projects-col">
          <Row>
            <Col>
            <p className="sampleprojecttitle">Sample Projects</p>
            </Col>
          </Row>
          <Row>
            {/* developer's 1st Projects START */}
            <Col>
              <Card
                className="project-1-card"
                onMouseEnter={() => CardOneEnter(VepAttendee)}
                onMouseLeave={CardOneLeave}
              >
                <Card.Body className="project-1-cardbody">
                  <Card.Title>
                    <p className="project-1-cardtitle">
                      Virtual Event Platform
                    </p>
                  </Card.Title>
                  {/* <Card.Text>
                    Virtual Event Platform with independent multiple events.
                    Admin and Attendee Consoles. Watch admin-uploaded videos,
                    real-time chat for attendees.
                  </Card.Text> */}
                </Card.Body>
              </Card>
            </Col>
            {/* developer's 1st Projects END */}

            <Col>
              <Card
                className="project-2-card"
                onMouseEnter={() => CardTwoEnter(BizSms)}
                onMouseLeave={CardTwoLeave}
              >
                <Card.Body className="project-2-cardbody">
                  <Card.Title style={{ color: "white" }}>
                    <p className="project-1-cardtitle">Biz-SMS</p>
                  </Card.Title>
                  {/* <Card.Text style={{ color: "white" }}>
                    A website that enables the users to send text messages in
                    bulk or single. This offers a dashboard to know how much
                    credits you have and to whom you send messages.
                  </Card.Text> */}
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card
                className="project-3-card"
                onMouseEnter={() => CardThreeEnter(OrderingPlatform)}
                onMouseLeave={CardThreeLeave}
              >
                <Card.Body className="project-3-cardbody">
                  <Card.Title>
                    <p className="project-1-cardtitle" style={{ color: "white" }}>Ordering Platform</p>
                  </Card.Title>
                  {/* <Card.Text>
                    This project is a tailored fit for a company to do a
                    ordering and selling products.
                  </Card.Text> */}
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card
                className="project-4-card"
                onMouseEnter={() => CardFourEnter(CaseNote)}
                onMouseLeave={CardFourLeave}
              >
                <Card.Body className="project-4-cardbody">
                  <Card.Title>
                    <p className="project-1-cardtitle" >Casenote-MD</p>
                  </Card.Title>
                  {/* <Card.Text>
                    A website and mobile project that offers a booking system
                    for doctors and patients without hassle.
                  </Card.Text> */}
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card
                className="project-5-card"
                onMouseEnter={() => CardFiveEnter(StoreLocator)}
                onMouseLeave={CardFiveLeave}
              >
                <Card.Body className="project-5-cardbody">
                  <Card.Title>
                    <p className="project-1-cardtitle">StoreLocator</p>
                  </Card.Title>
                  {/* <Card.Text>
                    A Personal project that has a goal to know and learn how to
                    use Mapping system.
                  </Card.Text> */}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row style={{marginTop:"20rem"}}>
        <Col>
        <p className="techstacktitle">My Tech Stack</p>
        <p className="techstacksubtitle">What Technologies and Frameworks<br/> I &apos; m Currently using and working on.</p>
        </Col>
      </Row>

      <Row style={{marginBottom:"20rem"}}>
            <Col>
            <Card
                className="techstack"
              >
                <Card.Body className="techstackbody">
                  <Row style={{textAlign:"center"}}>
                    <Col>
                    <img src={Html} style={{width:"260px",marginTop:"1rem"}}/>
                    </Col>
                    <Col>
                    <img src={Css} style={{width:"145px",marginTop:"1rem"}}/>
                    </Col>
                    <Col>
                    <img src={Javascript} style={{width:"130px",marginTop:"1rem"}}/>
                    </Col>
                    <Col>
                    <img src={Reactjs} style={{width:"250px",marginTop:"2rem"}}/>
                    </Col>
                    <Col>
                    <img src={Ionic} style={{width:"250px",marginTop:"2rem"}}/>
                    </Col>
                    <Col>
                    <img src={Mui} style={{width:"205px",marginTop:"1rem"}}/>
                    </Col>
                  </Row>
                 
                </Card.Body>
              </Card>
            </Col>
          </Row>

      {/* developer's Projects END */}
    </Container>
  );
}

export default MainPage;
