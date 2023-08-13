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
import Bootstrap from "../assets/bootstrap.png";

import Linkden from "../assets/linkden.png";
import Discord from "../assets/discord.png";
import Facebook from "../assets/facebook.png";

import Laptop from "../assets/laptop.png";
import Mobile from "../assets/mobile.png";

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
          marginTop: "-141rem",
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
          marginTop: "-141rem",
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
          marginTop: "-141rem",
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
          marginTop: "-141rem",
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
          marginTop: "-141rem",
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
                    <p
                      className="project-1-cardtitle"
                      style={{ color: "white" }}
                    >
                      Ordering Platform
                    </p>
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
                    <p className="project-1-cardtitle">Casenote-MD</p>
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

      <Row style={{ marginTop: "20rem" }}>
        <Col>
          <p className="techstacktitle">My Tech Stack</p>
          <p className="techstacksubtitle">
            What Technologies and Frameworks
            <br /> I &apos; m Currently using and working on.
          </p>
        </Col>
      </Row>

      <Row style={{ marginBottom: "20rem" }}>
        <Col>
          <Card className="techstack">
            <Card.Body className="techstackbody">
              <Row style={{ textAlign: "center" }}>
                <Col>
                  <img
                    src={Html}
                    style={{ width: "260px", marginTop: "1rem" }}
                  />
                </Col>
                <Col>
                  <img
                    src={Css}
                    style={{ width: "145px", marginTop: "1rem" }}
                  />
                </Col>
                <Col>
                  <img
                    src={Javascript}
                    style={{ width: "130px", marginTop: "1rem" }}
                  />
                </Col>
                <Col>
                  <img
                    src={Bootstrap}
                    style={{ width: "130px", marginTop: "1rem" }}
                  />
                </Col>
                <Col>
                  <img
                    src={Reactjs}
                    style={{ width: "250px", marginTop: "2rem" }}
                  />
                </Col>
                <Col>
                  <img
                    src={Ionic}
                    style={{ width: "250px", marginTop: "2rem" }}
                  />
                </Col>
                <Col>
                  <img
                    src={Mui}
                    style={{ width: "205px", marginTop: "1rem" }}
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="rowinformation">
        <Col>
          <Row>
            <Col>
              <p className="infotitle"> Contact Informations</p>
              <div className="divideline"></div>
              <Row>
                <Col>
                  <img
                    src={Linkden}
                    style={{ width: "150px", marginTop: "1rem", cursor:"pointer" }}
                    onClick={() => window.location.assign("https://www.linkedin.com/in/rysal-raven-rites-b342a6250/")}
                  />
                </Col>
                <Col>
                  <img
                    src={Discord}
                    style={{ width: "200px", marginTop: "0rem", cursor:"pointer" }}
                    onClick={() => window.location.assign("https://discordapp.com/users/blacklotus3022")}
                  />
                </Col>
                <Col>
                  <img
                    src={Facebook}
                    style={{ width: "150px", marginTop: "1rem", cursor:"pointer" }}
                    onClick={() => window.location.assign("https://www.facebook.com/profile.php?id=100001236377376")}
                  />
                </Col>
              </Row>
            </Col>

            <Col>
              <p className="infotitle">Experiences</p>
              <div className="divideline"></div>
              <p className="infosubtitle">Software Developer</p>
              <Row>
                <Col>
                  <p className="infotext">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-building"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z" />
                      <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V1Zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3V1Z" />
                    </svg>
                    &nbsp;&nbsp;LegionTech INC.
                  </p>
                </Col>
                <Col>
                  <p className="infotext">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-clipboard-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 1.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1Zm-5 0A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5v1A1.5 1.5 0 0 1 9.5 4h-3A1.5 1.5 0 0 1 5 2.5v-1Zm-2 0h1v1A2.5 2.5 0 0 0 6.5 5h3A2.5 2.5 0 0 0 12 2.5v-1h1a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3.5a2 2 0 0 1 2-2Z"
                      />
                    </svg>
                    &nbsp;&nbsp;Internship
                  </p>
                </Col>
                <Col>
                  <p className="infotext">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-calendar-event-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                    </svg>
                    &nbsp;&nbsp;September 2022
                  </p>
                </Col>
              </Row>
              <div className="divideline"></div>
              <p className="infosubtitle">Education Background</p>
              <p className="infotext">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-buildings"
                  viewBox="0 0 16 16"
                >
                  <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022ZM6 8.694 1 10.36V15h5V8.694ZM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15Z" />
                  <path d="M2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-2 2h1v1H2v-1Zm2 0h1v1H4v-1Zm4-4h1v1H8V9Zm2 0h1v1h-1V9Zm-2 2h1v1H8v-1Zm2 0h1v1h-1v-1Zm2-2h1v1h-1V9Zm0 2h1v1h-1v-1ZM8 7h1v1H8V7Zm2 0h1v1h-1V7Zm2 0h1v1h-1V7ZM8 5h1v1H8V5Zm2 0h1v1h-1V5Zm2 0h1v1h-1V5Zm0-2h1v1h-1V3Z" />
                </svg>
                &nbsp;&nbsp;Bachelor of Science in Computer Science
              </p>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row style={{ marginTop: "10rem" }} className="rowlast">
        <Col style={{ marginRight: "25rem" }}>
          <img src={Laptop} style={{ width: "150px", marginTop: "1rem" }} />
          <div className="dividelast"></div>
          <p className="infotextlast">
            Creating Responsive Website that can be use wheter it is in Computer
            <br />
            or Mobile Devices. Building Web Application using Html, Css,
            <br />
            JavaScript, BootStrap and React JS.
          </p>
        </Col>
        <Col>
          <img src={Mobile} style={{ width: "150px", marginTop: "1rem" }} />
          <div className="dividelast"></div>
          <p className="infotextlast">
            Creating a responsive coding application that can be utilized across
            various <br />
            mobile devices in the market involves developing such applications
            using a <br />
            multi-platform framework, such as the Ionic Framework. This approach
            allows <br />
            for deploying the application on both Android and iOS platforms
            effectively <br />
            utilizing the capabilities of the Ionic Framework.
          </p>
        </Col>
      </Row>

      {/* developer's Projects END */}
    </Container>
  );
}

export default MainPage;
