import React, { Component } from 'react';
import Contact_form from './Contact_form';
import NewsLetter_form from './NewsLetter_form';
import DocumentTitle from 'react-document-title';
import { Helmet } from 'react-helmet';





import './css/intro.css';
// import { Link } from 'react-router-dom';

class Contact_row extends Component {
    constructor() {
        super();
        this.state = {

        };
    }

    componentDidMount() {


    }

    render() {
        return (
            <DocumentTitle title='Contact | Ahmad Ali'>

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
