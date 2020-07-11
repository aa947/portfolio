import React, {Component} from 'react'
import Footer from '../Footer';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';
import DocumentTitle from 'react-document-title';
import { Helmet } from 'react-helmet';


const input =`

# dg-url : use google drive and dropbox as hosting services
[![Build Status](https://travis-ci.org/aa947/dg-url.svg?branch=master)](https://travis-ci.org/aa947/dg-url)  [![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) ![](https://david-dm.org/aa947/dg-url.svg) 
[![Package Quality](https://npm.packagequality.com/shield/dg-url.svg)](https://packagequality.com/#?package=dg-url) 
[![visit on: Github](https://img.shields.io/badge/visit_on-Github-blue)](https://github.com/aa947/dg-url) 
[![visit on: npm.org](https://img.shields.io/badge/visit_on-npmjs-red)](https://www.npmjs.com/package/dg-url)

## overview
 
 Reform google drive and dropbox urls so you can host your photos on gDrive or dropbox then use them directly in your html code for img.src attribuite.

 dg-url is a client side function.



## installation 
 
 \`\`\` npm i dg-url \`\`\`
 
## usage:

react.js:


\`\`\` import dg from "dg-url"; \n let url = //your shared photo's url (google drive or dropbox); \n <img src={ dg(url) } / > 
\`\`\`






node.js:



\`\`\` javascript 
ar dg = require("dg-url");

app.get("/", (req, res) => {

let url = //your shared photo's url (google drive or dropbox);

req.send( dg(url) ); //to the client

} );

} 


\`\`\`

## contact

 https://www.ahmad-ali.co.uk/
 
## licence 

 [![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/)



`




export default class DgUrl extends Component {
    render() {
        return (
            <DocumentTitle title='dg-url | Ahmad Ali'>

            <>
                            <Helmet>
                                <meta property="og:title" content="Ahmad Ali - dg-url is a javascript library" />
                                <meta property="og:description" content=" dg-url is a javascript library that gives you handy functionalities to work with urls.dg-url : handy functionalities to work with urls" />
                                <meta property="og:image" content="https://dl.dropbox.com/s/2kqh712gqev9yhy/ahmad-ali-200-200.jpg?dl=0" />
                                    <meta property="og:url" content="https://www.ahmad-ali.co.uk/" />
                                    <meta name="author" content="Ahmad Ali" />
                                    <meta name="twitter:card" content="Ahmad Ali Full Stack Developer" />
                                    <meta name="twitter:image" content="https://dl.dropbox.com/s/2kqh712gqev9yhy/ahmad-ali-200-200.jpg?dl=0" />
                        </Helmet>
            
            <>
            <div>
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">
                            dg-url
                   
                        </h6>
                    </div>
                    <div style={{ padding: "5%" }} className="card-body">





                        <ReactMarkdown style={{ padding: "5%" }} source={input} />
                       

                    </div></div></div>
                    <Footer />
                    </>
                </>
            </DocumentTitle>
        )
    }
}



