import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/mano.jpeg";
import projImg2 from "../assets/img/meem.jpg";
import projImg3 from "../assets/img/somu.jpeg";
import projImg4 from "../assets/img/sub.jpg";
import projImg5 from "../assets/img/bhuv.jpg";
import colorSharp2 from "../assets/img/logo.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "../assets/img/mano.jpeg";



export const Projects = () => {

  const projects = [
    {
      title: "Bhuvnesh Kumar",
      description: "DIRECTOR&FOUNDER",
      imgUrl: projImg5,
    },
    {
      title: "Subodh Shankar",
      description: "DIRECTOR&FOUNDER",
      imgUrl: projImg4,
    },
    {
      title: "Somu Singh Soni",
      description: "DIRECTOR&FOUNDER",
      imgUrl: projImg3,
    },
    {
      title: "Manoranjan Dey",
      description: "CO-FOUNDER",
      imgUrl: projImg1,
    },
    {
      title: "Meemansha Priyadarshani",
      description: "CO-FOUNDER",
      imgUrl: projImg2,
    },
   
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Team&Gallery</h2>
                <p>We pass over the past and the future. Introducing you a whole new experience of motorcycle riding and a new breed of biker cult that is full of thrill and exhilaration. We believe in connecting the heart and the machine as one entity. Saying the future is clean is cliche, Why not make it fast, fun and exciting.
</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Team</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Gallery</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Achievements</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <AliceCarousel autoPlay autoPlayInterval="3000">
                    <img src={image1} className="sliderimg"/>
                    <img src={image1} className="sliderimg"/>
                    <img src={image1} className="sliderimg"/>
                    <img src={image1} className="sliderimg"/>
                      </AliceCarousel>

                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <AliceCarousel autoPlay autoPlayInterval="3000">
                    <img src={image1} className="sliderimg"/>
                    <img src={image1} className="sliderimg"/>
                    <img src={image1} className="sliderimg"/>
                    <img src={image1} className="sliderimg"/>
                      </AliceCarousel>



                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
