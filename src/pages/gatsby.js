import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const LeftSidebar = props => (
  <Layout>
    <Helmet>
      <title>Gatsby Projects</title>
      <meta name="description" content="Right Sidebar Page" />
    </Helmet>

    <div id="main" className="wrapper style1">
      <div className="container">
        <header className="major">
          <h2>Gatsby Web Development User Interface</h2>
        </header>

        <section id="content">
          <h3> I design this webpage with Gatsby, React, HTML5, Sass(CSS) and Java Script.</h3>
          <h3>Some of the following websites made by me</h3>
          <ul>
            <li><a href="https://umairzaki.netlify.com/" target= "_blank">Umair Zaki</a></li>
            <li><a href="https://piaic-new.netlify.com/" target= "_blank">Piaic New</a></li>
            <li><a href="https://peaceful-goldwasser-23267b.netlify.com/" target= "_blank">Piaic for Learning</a></li>
          </ul>
        </section>
      </div>
    </div>
  </Layout>
)

export default LeftSidebar
