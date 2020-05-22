import React, { Component } from 'react';
import Chart from "react-google-charts";
import axios from 'axios';
import Footer from '../Footer';
import { fetchUser, fetchRepos } from './report/fetching_functions';
import { renderCard,  } from './report/rendering_functions';
import { githubData } from './report/charts_functions'

export default class Report extends Component {

    constructor(props) {
        super(props)
        this.state = {
            github: {
                followers: 0,
                following: 0,
                public_repos: 0,
                public_gists: 0,
                member: 2,
                total: 0
            },
            repos: {}
            //githubLoading: true,
        }

        //this.renderCard = this.renderCard.bind(this);
    }



    componentDidMount() {
        fetchUser(this);
        fetchRepos(this);
    }
    render() {

        return (
            <>
                {renderCard('My Github Data', githubData(this.state))}
                {renderCard('My Github Data', githubData(this.state))}
                <Footer />
            </>
        )
    }
}
