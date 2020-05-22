import React, { Component } from 'react';
import Chart from "react-google-charts";
import axios from 'axios';
import Footer from '../Footer';
import { fetchUser, fetchRepos } from './report/fetching_functions';
import { renderCard,  } from './report/rendering_functions';
import { githubData, extractRepoLanguages, languageChart } from './report/charts_functions';

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
            repos: []
            //githubLoading: true,
        }

        //this.renderCard = this.renderCard.bind(this);
    }



    componentDidMount() {
        fetchUser(this);
        fetchRepos(this);
    }
    render() {
       let languageData =  this.state.repos.length > 0 ?  extractRepoLanguages(this.state.repos) : {HTML: 122053 , JavaScript: 1487077, Python: 67013, Ruby: 34405, Shell: 4605  };

       let githubUserData =  this.state.repos.length > 0 ?  this.state.github : { followers: 10, following: 135, public_repos: 67, public_gists: 1, total:225, member:2 };
        return (
            
            <>
                {renderCard('My Github Account Overview', githubData(githubUserData))}
                {renderCard('My Programming Languages\' details', languageChart(languageData))}
                <Footer />
            </>
        )
    }
}
