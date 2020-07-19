import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import CallToActionCards from './CallToActionCards';
import MetaTagsAndTitles from '../helpers_components/MetaTagsAndTitles';


import './css/intro.css';

class Intro extends Component {

  render() {

    const metaDetails = {
      description: "Full-stack developer, back-ended with the precision of chemistry and medical practise.  Educated to degree level with 1 years’ experience in web development. This has given me skills in JS: MERN, PHP: WP_API, DB: MONGO, SQL, HTML and CSS.",
      title: "Ahmad Ali - Full Stack Developer",
      imageUrl: "ttps://dl.dropbox.com/s/2kqh712gqev9yhy/ahmad-ali-200-200.jpg?dl=0"
    };


    return (
      <>
        <MetaTagsAndTitles
          docTitle="Ahmad Ali - Full Stack Dev"
          tagTitle={metaDetails.title}
          description={metaDetails.description}
          imageUrl={metaDetails.imageUrl}
          url="https://www.ahmad-ali.co.uk/"
          author="Ahmad Ali"
        />
        <div>
          {/* <!-- Page Heading --> */}
          {/* <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0" style={{ color: 'white' }}>Welcome ... How can I help ??</h1>
          </div> */}

          {/* <!-- Content Row for call to action cards --> */}
          <div className="row" >
            <CallToActionCards />
          </div>



          <div className="row">
            <div className="col-12">
              <div className="card shadow mb-4 p-4 ">
                <div className="row">
                  <div className="card-body col col-xl-7 col-lg-7"
                    style={{ paddingLeft: "5%", paddingRight: "5%" }}
                  >
                    <h1> I'm Ahmad Ali</h1>
                    <h5> Full Stack Developer </h5>

                    <p style={{ padding: "5px !important" }}>
                      Full-Stack Developer with 2 years of experience combined with 7 years of studying and practising pharmacy and bio-Informatics. Thus I have a wider skill set that required for every Developer. As a Developer, I Developed, Designed and Deployed Apps, websites and online shops mainly using Javascript (Node) and PHP.
                      </p>

                    <p style={{ padding: "5px !important" }}>
                      I also worked with frameworks like React, Express and WordPress. and I have a solid knowledge about Responsive web design and client-side scripting: vanilla js, jQuery. Apart from this, I have a good knowledge at the server and database level which includes MongoDB and SQL. good skills in e-commerce and money-handlers integration like Paypal, stripe, GoCardless.
                      </p>
                    <pre> Location: London, UK

                   </pre>
                    <pre> Know Me More..

                  </pre>

                    <SocialIcon url="https://www.linkedin.com/in/ahmad-ali-07383164194/" /> {'\u00A0'}
                    <SocialIcon url="https://twitter.com/AhmadAl43872454" /> {'\u00A0'}
                    <SocialIcon url="https://github.com/ahmad-ali14" /> {'\u00A0'}
                    <SocialIcon url="https://www.facebook.com/ahmad623" /> {'\u00A0'}




                  </div>

                  {/* My Personal photo */}
                  <div className="col-xl-5 col-lg-5">
                    <div className="card-body text-center">
                      <img src={process.env.PUBLIC_URL + "/imgs/ahmad_ali.jpg"} width="90%" />
                    </div>
                  </div>


                </div>

              </div>


            </div>
          </div>

        </div>

      </>
    );
  }
}

export default Intro;
