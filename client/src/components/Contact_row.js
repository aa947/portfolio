import React, { Component } from 'react';
// import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
//import Jumbotron from 'react-bootstrap/Jumbotron';
import Contact_form from './Contact_form';
import NewsLetter_form from './NewsLetter_form';
import { Helmet } from 'react-helmet';
import DocumentTitle from 'react-document-title';




import './css/intro.css';
// import { Link } from 'react-router-dom';

class Contact_row extends Component {
    constructor() {
        super();
        this.state = {

        };
    }

    componentWillMount() {

    }
    componentDidMount() {

      


        //     // document.title = this.props.title;

        //     const head = document.querySelector('head');

        //    // const title = document.documentElement.getElementsByTagName('title');
        //     // title.remove();
        //    // title.innerText="Contact | Ahmad Ali";
        //     // head.appendChild(title);

        //     const meta = document.createElement('meta');
        //     meta.setAttribute('property', 'og:titel');
        //     meta.setAttribute('content', 'Ahmad Ali - Full Stack Developer');
        //     head.appendChild(meta);

        //     const meta1 = document.createElement('meta');
        //     meta1.setAttribute('property', 'og:description');
        //     meta1.setAttribute('content', 'Full-stack developer, back-ended with the precision of chemistry and medical practise.  Educated to degree level with 1 years’ experience in web development. This has given me skills in JS: MERN, PHP: WP_API, DB: MONGO, SQL, HTML and CSS.');
        //     head.appendChild(meta1);



        //     const meta2 = document.createElement('meta');
        //     meta2.setAttribute('property', 'og:image');
        //     meta2.setAttribute('content', 'https://dl.dropbox.com/s/2kqh712gqev9yhy/ahmad-ali-200-200.jpg?dl=0');
        //     head.appendChild(meta2);

        //     const meta3 = document.createElement('meta');
        //     meta3.setAttribute('property', '"og:url');
        //     meta3.setAttribute('content', "https://www.ahmad-ali.co.uk/");
        //     head.appendChild(meta3);

        //     const meta4 = document.createElement('meta');
        //     meta4.setAttribute('property', 'author');
        //     meta4.setAttribute('content', 'Ahmad Ali');
        //     head.appendChild(meta4);



    }

    render() {
        return (

            <DocumentTitle title="Contact | Ahmad Ali ">
            <>
                <Helmet>
                    <meta property="og:title" content="Ahmad Ali - Full Stack Developer" />
                    <meta property="og:description" content="Full-stack developer, back-ended with the precision of chemistry and medical practise.  Educated to degree level with 1 years’ experience in web development. This has given me skills in JS: MERN, PHP: WP_API, DB: MONGO, SQL, HTML and CSS." />
                    <meta property="og:image" content="https://dl.dropbox.com/s/2kqh712gqev9yhy/ahmad-ali-200-200.jpg?dl=0" />
                        <meta property="og:url" content="https://www.ahmad-ali.co.uk/" />
                        <meta name="author" content="Ahmad Ali" />
                        <meta name="twitter:card" content="Ahmad Ali Full Stack Developer" />
                        <meta name="twitter:image" content="https://dl.dropbox.com/s/2kqh712gqev9yhy/ahmad-ali-200-200.jpg?dl=0" />
            </Helmet>

                    <div className="col-lg-12 mb-12">





                        <Contact_form />


                        <NewsLetter_form />



                    </div>
</>
</DocumentTitle>
        );

    }
}


export default Contact_row;
