import React, { Component } from 'react';
import Footer from './Footer';

export default class Meetings extends Component {


    componentDidMount() {
        const head = document.querySelector('head');
        const script = document.createElement('script');
        script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
        head.appendChild(script);
    }


    render() {
        return (
            <>
                <div className="row">
                    <div className="col-lg-12 mb-12">

                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Book a Meeting</h6>
                            </div>
                            <div className="card-body" style={{ textAlign: "center" }} >
                                <div style={{  textAlign: 'center', padding: " 5% 15% 0 15% " }} >
                                <h4>Welcome, we can arrange a short online meeting or phone call so you can tell me what  problrms do you have or what projects you want to build.</h4>
                                <h5 style={{ color: "red" }} > In case you don't want to speak on the phone,  please speciifiy an online way to meet on the notes section at the end of the booking clander. </h5>
                                </div>
                                <div className="calendly-inline-widget" data-url="https://calendly.com/ahmad-ali14/15min" style={{ width: "100%", height: "920px" }}></div>



                            </div>
                        </div>
                    </div>
                </div>
               
                <Footer />
        
            </>
        )
    }
}
