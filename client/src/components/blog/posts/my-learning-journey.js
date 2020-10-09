import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import "../css/post.css";
import { Helmet } from "react-helmet";
import DocumentTitle from "react-document-title";

const input = `
I’m a pharmacist with a degree in pharmacy and pharmaceutical chemistry from Damascus University graduated in 2016. It was a 5 years long course in a domain I don’t like and I don’t have any motivation towards it, but this was the choice of my parents, so when I first started I took a look at the 60 courses in the curriculum and felt scared, so I ran away. 


Then I went back to another institute called Higher Institute of Applied Sciences and Technology (HIAST) which is the top scientific institute in Syria. I passed all the entry tests, and those were the hardest tests I’ve ever seen in my life. I studied computer science there for a month. During that month my parents kept persuading me that they need a medical career.


Under pressure and my parents' dreams of their “social rank boost” if they had a pharmacist son I went back to study pharmacy.    For the next 5 years I faced a lot of low motivation moments, cause what drove me here was not my own motivation.


Quickly I learned that the motivation you don’t will be a burden, so I have invented my own motivation which was that I don’t start a project and leave it uncompleted. This has helped me to continue my studies and graduate with an 80% GPA.

Later on in my life, my motivation towards computers and programming did not go away., and I did not find the promised after graduation life. So in 2018 -after 2 years of graduation- I started teaching myself the basics of programming and computer science as a self-taught or self- directed learner using open source books and youtube tutorials.  


But soon I realised this is not the best way to reach anywhere, cause there was no defined roadmap and there is a lot to learn. So I searched for help and I ended up getting a scholarship from Kiron Open Higher Education  Institute. Their  Idea was to give people access to the learning resources. So I completed 35 online courses in 2 years on platforms like Edx and Coursera. 


Kiron Idea was very helpful cause it contains a roadmap and they are not a bunch of randomly collected courses. So I finished these courses with a concentration on web development. Then I decided that there is still a lot to learn so I took an open source online bootcamp called Free Code Camp.
In 2020, I started assisting in teaching web development basics to newbies at Code Your Future coding school in the UK. And I felt that I lack the theoretical fundamentals of computer science due to the lack of formal education, so I started a computer science degree at University of the People. 

I believe that the internal motivation is much stronger and will last longer, cause I did with 2 years of intrinsic motivation more than what I’ve done in 6 years of extrinsic motivation.
 
 
In the ‘era’ of extrinsic motivation  -between 2011 to 2017- I found it hard to keep motivated with a motivation you don’t own, so I ended up extracting an intrinsic motivation from that extrinsic one in order to keep me going. 

> This article was originally submitted by me for UNIV1101 course at UoPeople. 
`;

export default class MyLearningJourney extends Component {
  render() {
    return (
      <DocumentTitle title="Blog | My Learnig Journey, How I moved from pharmacy to web development">
        <div className="post">
          {/* adding meta data with Helmet */}
          <Helmet>
            <meta
              property="og:title"
              content="My Learnig Journey, How I moved from pharmacy to web development"
            />
            <meta
              property="og:description"
              content="Later on in my life, my motivation towards computers and programming did not go away., and I did not find the promised after graduation life. So in 2018 -after 2 years of graduation- I started teaching myself the basics of programming and computer science as a self-taught or self- directed learner using open source books and youtube tutorials."
            />
            <meta
              property="og:image"
              content="https://dl.dropbox.com/s/2kqh712gqev9yhy/ahmad-ali-200-200.jpg?dl=0"
            />
            <meta property="og:url" content="https://www.ahmad-ali.co.uk/" />
            <meta name="author" content="Ahmad Ali" />
            <meta
              name="twitter:card"
              content="Ahmad Ali Full Stack Developer"
            />
            <meta
              name="twitter:image"
              content="https://dl.dropbox.com/s/2kqh712gqev9yhy/ahmad-ali-200-200.jpg?dl=0"
            />
          </Helmet>
          <div>
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-primary">
                  My Learnig Journey, How I moved from pharmacy to web
                  development"
                </h5>
              </div>
              <div style={{ padding: "5%" }} className="card-body">
                <ReactMarkdown style={{ padding: "5%" }} source={input} />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 mb-12">
              <div className="card-body" style={{ textAlign: "center" }}>
                <a className="btn btn-primary" href="/blog">
                  <h5 className="m-0 font-weight-bold ">Back to blog</h5>{" "}
                </a>
              </div>
            </div>
          </div>

          {/* <Footer /> */}
        </div>
      </DocumentTitle>
    );
  }
}
