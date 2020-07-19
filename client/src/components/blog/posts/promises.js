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






    render() {
        return (
            <>


                <div className="row">
                    <div className="col-lg-12 mb-12">

                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h5 className="m-0 font-weight-bold text-primary">Promises or Callbacks .. key Notices in MongoDB.</h5>
                            </div>
                            <div className="card-body post-preview" style={{ textAlign: "center" }} >


                                <p>
                                    MongoDB Error's first approach makes debugging more efficient.
                                    But with the heavy use of callback functions, we ended up in a situation called Callback Hell.
                                    To avoid that we use promises, and here is a small notice you should take care of it before you start.
                                    <a href="./posts/promises"> <button className="btn text-primary">
                                        continut Reading ..
                                        </button>
                                    </a>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-lg-12 mb-12">


                        <div className="card-body" style={{ textAlign: "center" }} >

                            <a href="../blog"><h6 className="m-0 font-weight-bold text-primary">Back to blog</h6> </a>


                        </div>
                    </div>
                </div>
                {/* <Footer /> */}

            </>
        )
    }
}
