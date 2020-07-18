import React, { Component } from 'react';
import './css/Review.css';
// import { SocialIcon } from 'react-social-icons';
import domain from '../config';
import { isLocalhost } from '../helpers';

export default class Reviews extends Component {

    constructor(props) {
        super(props);
        this.state = {

            reviews: []


        };


    }

    componentDidMount() {
        let reviewsUrl = isLocalhost ? `${domain}/api/reviews` : '/api/reviews';
        fetch(reviewsUrl).then(res => res.json())
            .then(reviews => this.setState({ reviews }, () => {
                // console.log('Reviews fetched...', reviews)
                // console.log(this.state.reviews, 'dtste reviews');
            }));

    }



    render() {

        var reviews = this.state.reviews;
        return (
            <div className="col col-12 " id="reviews">
                {/* <hr className="testimonials" /> */}
                {/* <p className="desc ">❤️</p> */}

                {/* <div className="row">
                    <div className="tweetForm">
                        <ReviewForm />
                    </div>
                </div>
                <br /> */}

                <div className="row ">
                    <div className="tweets">
                        {reviews.map((r) => {
                            return (
                                <div className="tweet" key={r._id}>

                                    <div className="content">
                                        <p className="reviewText"> {r.message}</p>
                                        <p className="reviewAuthor"> {r.name}</p>
                                        <i className="relation" >{r.rel}</i>

                                    </div>

                                </div>
                            );
                        })}

                    </div>

                    <br />
                </div>


            </div>


        )
    }
}
