import React, { Component } from 'react'
import Footer from '../../Footer';
import ReactMarkdown from 'react-markdown';
import '../css/post.css';
import { Helmet } from 'react-helmet';
import DocumentTitle from 'react-document-title';



const input = `
When you are using MongoClient to connect to MongoDB Atlas,  it is important to know that there are 3 layers of connection.

1- connect to the cluster ..


\`\`\`javascript 

mongo.connect(process.env.DATABASE_URL, (err, db) => {
  if(err) {
    console.log('Database error: ' + err);
  } else {
    console.log('Successful database connection');
  }
});

  
\`\`\`

using the code above will not deliver you to the database, although you will not get any errors, you will find that your operations on the database-collection are not successful.
again, there is no errors in this connection, so you won't understand why your interaction with the DB is not successful.

2- connect to the database: 


\`\`\`javascript

//DB and authentication
mongo.connect(process.env.DATABASE, (err, cluster) => {
  if(err) {
    console.log('Database error: ' + err);
  } else {
    //connecting to the cluster
    console.log('Successful database connection');
    
    //connetcing to the database
    const db = cluster.db(DATABASE_NAME);
  }
    
 });

\`\`\`
in the code above, the \`connection.db() or cluster.db() \` function -if you want to think of it this way- to connect us our database.


3- connect to  the collection :

\`\`\`javascript

//DB and authentication
mongo.connect(process.env.DATABASE_URL, (err, cluster) => {
  if(err) {
    console.log('Database error: ' + err);
  } else {
    //connecting to the cluster
    console.log('Successful database connection');
    
    //connetcing to the database
    const db = cluster.db(DATABASE_NAME);
   
   //conneting to the collection
   const coll = db.collection(COLLECTION_NAME);
 
   //do your stuff on the collection here.

  }
});


\`\`\`

in the code above we reached our collection, so we can do our operations on it correctly.

remember to put all of the code that is doing operations on Database inside the MongoClient connection.

Happy Coding..!!
`


export default class Connecting_to_Atlas extends Component {
  render() {
    return (
      <DocumentTitle title="Blog | Connecting your App to MongoDB Atlas">
        <div className="post">
          {/* adding meta data with Helmet */}
          <Helmet>
            <meta property="og:title" content="Connecting your App to MongoDB Atlas" />
            <meta property="og:description" content="When you are using MongoClient to connect to MongoDB Atlas, it is important to know the three layers of connection. the cluster layer  the the database then the collection layer" />
            <meta property="og:image" content="https://dl.dropbox.com/s/2kqh712gqev9yhy/ahmad-ali-200-200.jpg?dl=0" />
            <meta property="og:url" content="https://www.ahmad-ali.co.uk/" />
            <meta name="author" content="Ahmad Ali" />
            <meta name="twitter:card" content="Ahmad Ali Full Stack Developer" />
            <meta name="twitter:image" content="https://dl.dropbox.com/s/2kqh712gqev9yhy/ahmad-ali-200-200.jpg?dl=0" />
          </Helmet>
          <div>
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-primary">
                  Connecting your App to MongoDB Atlas .. Important Notice.

                        </h5>
              </div>
              <div style={{ padding: "5%" }} className="card-body">
                <ReactMarkdown style={{ padding: "5%" }} source={input} />
              </div></div></div>

          <div className="row">
            <div className="col-lg-12 mb-12">


              <div className="card-body" style={{ textAlign: "center" }} >

                <a className="btn btn-primary" href="/blog"><h5 className="m-0 font-weight-bold ">Back to blog</h5> </a>


              </div>
            </div>
          </div>

          {/* <Footer /> */}
        </div>

      </DocumentTitle>
    )
  }
}
