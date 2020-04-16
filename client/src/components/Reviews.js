import React, { Component } from 'react';
import './css/Review.css';
// import { SocialIcon } from 'react-social-icons';
import ReviewForm from './ReviewForm';


export default class Reviews extends Component {

    constructor(props) {
        super(props);
        this.state = {

            reviews: []


        };


    }

    componentDidMount() {

        fetch('/api/reviews').then(res => res.json())
            .then(reviews => this.setState({ reviews }, () => {
                // console.log('Reviews fetched...', reviews)
                // console.log(this.state.reviews, 'dtste reviews');
            }));

    }



    render() {

        var reviews = this.state.reviews;
        return (
            <div className="col col-12 ">
                <hr className="testimonials" />
                <p className="desc ">❤️</p>

                <div className="row tweetForm">
                    <ReviewForm />
                </div>
                <br />

                <div className="row tweets">

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



                    <br />
                </div>


            </div>


        )
    }
}
