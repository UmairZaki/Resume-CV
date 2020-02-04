import React from 'react'
import pic02 from '../assets/images/pic02.jpg'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'

const One = props => (
  <section
    id="one"
    className="spotlight style1 bottom inactive"
    style={{ backgroundImage: `url(${pic02})` }}
  >
    <span className="image fit main">
      <img src={pic02} alt="" />
    </span>
    <Fade bottom big>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-4 col-12-medium">
              <header>
                <h1>OBJECTIVE</h1>
              </header>
              <h4>Looking for a challenging role in a reputable organization to utilize my technical, database, and management skills for the growth of the organization as well as to enhance my knowledge about new and emerging trends in the IT sector.</h4>
              <h5>
                To work a dynamic and challenging
                environment where I can optimally
                utilize my professional skills.
                Hardworking, honest, responsible
                and aspiring professional seeking as
                a position member of your team that
                requires creativity, hard work and
                multitasking.
                </h5>
            </div>
            <div className="col-4 col-12-medium">
            <header>
                <h1>Profile</h1>
              </header>
              <h4>Father: Muhammad Zaki</h4>
              <h4>CNIC: 42301-6362390-9</h4>
              <h4>Date of Birth: 16-July-1989</h4>
              <h4>Marital Status: Single</h4>
              <h4>Country: Pakistan</h4>
              <h4>Cell: 03132873668</h4>
              <h4>Email: umairzakicnbc@gmail.com</h4>
              <h5>Address: Plot # 1/29, 4th Floor, Flat # A7, Block 5b, Nazimabad, Karachi</h5>
              
            </div>
            <div className="col-4 col-12-medium">
            <header>
                <h1>Education</h1>
              </header>
              <h4>Matriculation from Bahawalpur Board (Pre-medical Grade "B"2005)</h4>
              <h4>Matriculation from Karachi Board (Commerce Grade "A"2008)</h4>
              <h4>Intermediate from Karachi Board (Commerce Grade "C" 2010)</h4>
              <h4>Studying Artificial intelligence, Cloud Native Computing and Internet of Things from Axiom PIAIC Headquarter.</h4>
              <h5>Some of my achivemets are given below:</h5>
              
            </div>
          </div>
        </div>
      </div>
    </Fade>
    <ScrollLink
      to="two"
      className="goto-next"
      activeClass="active"
      smooth={true}
      offset={50}
      duration={1500}
      spy={true}
    >
      Next
    </ScrollLink>
  </section>
)
export default One
