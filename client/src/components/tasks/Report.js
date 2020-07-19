import React, { Component } from 'react';
// import Chart from "react-google-charts";
// import axios from 'axios';
// import Footer from '../Footer';
// import { fetchUser, fetchRepos, fetchProjects } from './report/fetching_functions';
import { renderCard, } from './report/rendering_functions';
import {
    githubData,
    // extractRepoLanguages,
    languageChart,
    // extractProjectsData,
    //   projectsChart 
} from './report/charts_functions';
// import tempProjectsJson from './report/reportData/projects.json';
import { Helmet } from 'react-helmet';
import DocumentTitle from 'react-document-title';
// import { Logger } from 'mongodb';

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
            projects: [],
        }

        //this.renderCard = this.renderCard.bind(this);
    }



    componentDidMount() {
        // fetchUser(this);
        // fetchRepos(this);
        //fetchProjects(this);        
    }
    render() {



        //    let languageData =  this.state.repos.length > 0 ?  extractRepoLanguages(this.state.repos) : {HTML: 122053 , JavaScript: 1487077, Python: 67013, Ruby: 34405, Shell: 4605  };

        //    let githubUserData =  this.state.github.followers > 0 ?  this.state.github : { followers: 10, following: 135, public_repos: 67, public_gists: 1, total:225, member:2 };

        let languageData = { HTML: 122053, JavaScript: 1487077, Python: 67013, Ruby: 34405, Shell: 4605 };

        let githubUserData = { followers: 10, following: 135, public_repos: 67, public_gists: 1, total: 225, member: 2 };

        // let projectsData = this.state.projects.length > 0 ? extractProjectsData(this.state.projects) : extractProjectsData(tempProjectsJson);
        return (

            <DocumentTitle title="My Report| Ahmad Ali">
                <>
                    {/* adding meta data with Helmet */}
                    <Helmet>
                        <meta property="og:title" content="work summary " />
                        <meta property="og:description" content=" I have 2+ years of experience in Web development mainly in Node and PHP. I worked with frameworks like React, Express, WordPress. I have solid knowledge about Responsive web design and client-side scripting like vanilla js, jQuery. Apart from this, I have a good knowledge at the server and database level which includes MongoDB, SQL and Heroku. I also have good skills in e-commerce integration like Paypal, stripe, GoCardless." />
                        <meta property="og:image" content="https://dl.dropbox.com/s/2kqh712gqev9yhy/ahmad-ali-200-200.jpg?dl=0" />
                        <meta property="og:url" content="https://www.ahmad-ali.co.uk/" />
                        <meta name="author" content="Ahmad Ali" />
                        <meta name="twitter:card" content="Ahmad Ali Full Stack Developer" />
                        <meta name="twitter:image" content="https://dl.dropbox.com/s/2kqh712gqev9yhy/ahmad-ali-200-200.jpg?dl=0" />
                    </Helmet>
                    {renderCard('My Github Account Overview', githubData(githubUserData))}
                    {renderCard('My Programming Languages\' details', languageChart(languageData))}
                    {/* {renderCard('My Projects\' details', projectsChart(projectsData))} */}
                    {/* <Footer /> */}
                </>

            </DocumentTitle>
        )
    }
}
