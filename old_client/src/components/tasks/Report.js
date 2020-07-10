import React, { Component } from 'react';
import Chart from "react-google-charts";
import axios from 'axios';
import Footer from '../Footer';
import { fetchUser, fetchRepos, fetchProjects } from './report/fetching_functions';
import { renderCard,  } from './report/rendering_functions';
import { githubData, extractRepoLanguages, languageChart, extractProjectsData, projectsChart } from './report/charts_functions';
import tempProjectsJson from './report/reportData/projects.json';

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
            repos: [],
            //githubLoading: true,
            projects : [], 
        }

        //this.renderCard = this.renderCard.bind(this);
    }



    componentDidMount() {
        fetchUser(this);
        fetchRepos(this);
        fetchProjects(this);
    }
    render() {

     
          
       let languageData =  this.state.repos.length > 0 ?  extractRepoLanguages(this.state.repos) : {HTML: 122053 , JavaScript: 1487077, Python: 67013, Ruby: 34405, Shell: 4605  };

       let githubUserData =  this.state.github.followers > 0 ?  this.state.github : { followers: 10, following: 135, public_repos: 67, public_gists: 1, total:225, member:2 };

       let projectsData = this.state.projects.length > 0 ? extractProjectsData(this.state.projects) : extractProjectsData(tempProjectsJson);
        return (
            
            <>
                {renderCard('My Github Account Overview', githubData(githubUserData))}
                {renderCard('My Programming Languages\' details', languageChart(languageData))}
                {renderCard('My Projects\' details', projectsChart(projectsData))}
                <Footer />
            </>
        )
    }
}
