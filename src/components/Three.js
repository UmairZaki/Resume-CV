import React from 'react'
import pic04 from '../assets/images/pic04.jpg'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'

const Three = props => (
  <section
    id="three"
    className="spotlight style3 left inactive"
    style={{ backgroundImage: `url(${pic04})` }}
  >
    <span className="image fit main bottom">
      <img src={pic04} alt="" />
    </span>
    <Fade left big>
      <div className="content">
        <header>
          <h2>Coursera Certificate</h2>
          <h3>AI For Everyone deeplearning.ai</h3>
        </header>
        <h6>
        I had passed the Corsera Certificate (deeplearning.ai) AI For Everyone with 93% marks on July 12, 2019.
        </h6>
        <h6>Verify at coursera.org/verify/YHQEDEGRL7QH
           Coursera has confirmed the identity of this individual and
           their participation in the course.</h6>
      </div>
    </Fade>
    <ScrollLink
      to="four"
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

export default Three
