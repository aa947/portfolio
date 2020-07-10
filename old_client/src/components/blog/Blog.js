import React, { Component } from 'react';
import Footer from '../Footer';
import './css/blog.css';

export default class Blog extends Component {


    componentDidMount() {
        const head = document.querySelector('head');
        const script = document.createElement('meta');
        script.setAttribute('property', 'og:titel');
        script.setAttribute('content', 'Blog Ahmad Ali Full stack developer dev');
        head.appendChild(script);

        const script1 = document.createElement('meta');
        script1.setAttribute('property', 'og:description');
        script1.setAttribute('content', 'this is my blog, I write my articles heere');
        head.appendChild(script1);
    }


    posts = [
        {
            title: 'Promises or Callbacks .. key Notices in MongoDB.',
            preview: `MongoDB Error's first approach makes debugging more efficient.
            But with the heavy use of callback functions, we ended up in a situation called Callback Hell.
            To avoid that we use promises, and here is a small notice you should take care of it before you start.`  ,
            link: "./posts/promises"
        }, 
        {
            title: 'Connecting your App to MongoDB Atlas .. Important Notice.',
            preview: `When you are using MongoClient to connect to MongoDB Atlas, it is important to know the three layers of connection. the cluster layer  the the database then the collection layer`  ,
            link: "./blog/posts/connecting-your-app-to-mongodb-atlas"
        }
    ];


    render() {
        return (
            <div className="blog">
                <div className="row">
                    <div className="col-lg-12 mb-12">


                        <div className="card-body" style={{ textAlign: "center" }} >

                            <h5 className="m-0 font-weight-bold text-primary">Blog Posts</h5>


                        </div>
                    </div>
                </div>

{
    this.posts.map((p) => {
        return(
            <div className="row">
                    <div className="col-lg-12 mb-12">

                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h5 className="m-0 font-weight-bold text-primary">{p.title}</h5>
                            </div>
                            <div className="card-body post-preview" style={{ textAlign: "center" }} >


                                <p>
                                  { p.preview }
                                    <a href={p.link}> <button className="btn text-primary">
                                        continut Reading ..
                                        </button>
                                    </a>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>

        )
    })
}
                <Footer />

            </div>
        )
    }
}
