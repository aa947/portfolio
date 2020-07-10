import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import Numbers from './numbers';
import DocumentTitle from 'react-document-title';
import { Helmet } from 'react-helmet';
import './css/intro.css';

class Intro extends Component {

  componentDidMount() {
    fetch('/api/views')
      .then(res => res.json())
    // .then(data => console.log(data));
  }


  render() {
    return (
      <DocumentTitle title='Ahmad Ali - Full Stack Dev'>

        <>
        {/* Adding Meta Data Using Helmet */}
          <Helmet>
            <meta property="og:title" content="Ahmad Ali - Full Stack Developer" />
            <meta property="og:description" content="Full-stack developer, back-ended with the precision of chemistry and medical practise.  Educated to degree level with 1 years’ experience in web development. This has given me skills in JS: MERN, PHP: WP_API, DB: MONGO, SQL, HTML and CSS." />
            <meta property="og:image" content="https://dl.dropbox.com/s/2kqh712gqev9yhy/ahmad-ali-200-200.jpg?dl=0" />
            <meta property="og:url" content="https://www.ahmad-ali.co.uk/" />
            <meta name="author" content="Ahmad Ali" />
            <meta name="twitter:card" content="Ahmad Ali Full Stack Developer" />
            <meta name="twitter:image" content="https://dl.dropbox.com/s/2kqh712gqev9yhy/ahmad-ali-200-200.jpg?dl=0" />
          </Helmet>



          <div display="table">
            {/* added dev up */}
            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Welcome ... How can I help ??</h1>

              <a target="_blank" href="mailto:aallii300300@gmail.com"  className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
              <div><i className="fas fa-envelope fa-sm text-white-50"></i> Drop A message</div> </a> 
            </div>

            {/* <!-- Content Row for Numbers --> */}
            <div className="row" >
              <Numbers />
            </div>


            {/* <!-- Content Row --> */}
            <div className="row" display="table-row">
              {/* <!-- Area Chart --> */}
              <div className="col-xl-12 col-lg-12">
                {/* <div className="row"> */}
                <div className="card shadow mb-4 row ">
                  {/* <!-- Card Header - Dropdown --> */}
                  <div className="row">
                    {/* <!-- Card Body --> */}
                    <div className="card-body col col-xl-7 col-lg-7" style={{ paddingLeft: "10%", paddingRight: "10%" }}   >
                      <h1> I'm Ahmad Ali</h1>
                      <h5> Full Stack Developer </h5>
                      <p style={{ padding: "5px !important" }}>Full-stack developer, back-ended with the precision of chemistry and medical practise. </p>

                      <p text-align="justify" style={{ padding: "5px !important" }}>
                        Educated to degree level with 1 years’ experience in web development. This has given me skills in JS: MERN, PHP: WP_API, DB: MONGO, SQL, HTML and CSS.  </p>
                      <p style={{ padding: "5px !important" }}> Currently seeking a position as a Web Developer that will utilise my skills and experience. </p>

                      <pre> Location: London, UK

                   </pre>
                      <pre> Know Me More..

                  </pre>

                      <SocialIcon url="https://www.linkedin.com/in/ahmad-ali-07383164194/" /> {'\u00A0'}
                      <SocialIcon url="https://twitter.com/AhmadAl43872454" /> {'\u00A0'}
                      <SocialIcon url="https://github.com/ahmad-ali14" /> {'\u00A0'}
                      <SocialIcon url="https://www.facebook.com/ahmad623" /> {'\u00A0'}




                    </div>

                    {/* <!-- Pie Chart --> */}
                    <div className="col-xl-5 col-lg-5">
                      {/* <div className="card shadow mb-4"> */}
                      {/* <!-- Card Header - Dropdown --> */}

                      {/* <!-- Card Body --> */}
                      <div className="card-body" style={{ paddingLeft: "20%" }}>
                        <img src="https://dl.dropbox.com/s/iy9wptff56by81g/prr2.jpg?dl=0" width="90%" />
                      </div>
                      {/* </div> */}
                    </div>
                    {/* end photo */}

                  </div>

                </div>

                {/* </div> */}
              </div>
            </div>

            {/* added Div */}
          </div>
        </>
      </DocumentTitle>
    );
  }
}

export default Intro;
