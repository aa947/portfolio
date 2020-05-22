import React, { Component } from 'react';
import { loadingSpinner} from './rendering_functions';
import Chart from "react-google-charts";
import axios from 'axios';


/**
 *@param props <Object> : data to be shown on the chart
 *@desc renders the chart of my Github Data
 */
export function githubData(props){
    let { followers, following, public_repos, public_gists, total, member } = props;
    //let { githubLoading } = props
    return  (<Chart
            width={'100%'}
            height={'100%'}
            chartType="Gauge"
            loader={ loadingSpinner()}
            data={[
                ['Task', 'Hours per Day'],
                ['Followers', followers],
                ['Following', following],
                ['Repos', public_repos],
                ['Gists', public_gists],
                ['Years', member]
            ]}
            options={{
                title: 'My Github Account Overview',
                //sliceVisibilityThreshold: 0.2, // 20%
            }}
            rootProps={{ 'data-testid': '1' }}
        />)
}


export function extractRepoLanguages (props){
    let languages = {};
        props.map((e) => {
            axios.get(e.languages_url).then((res)=>{
                let data = res.data;
                for( let i in data){
                    let langKeys = Object.keys(languages);
                    if (langKeys.includes(i)){
                        return languages[i] += data[i];
                    }
                    if (!langKeys.includes(i)){
                        return languages[i] = data[i];
                    }
                   
                }
            })
        })

    console.log('languages', languages)
}



export function languageChart(props){
    let keys = Object.keys(props);
    let values = Object.values(props);
    let chartData = [['Task', 'Hours per Day']];
    for (let i in keys){
        chartData.push([keys[i], values[i]])
    }
    return  (<Chart
            width={'100%'}
            height={'300px'}
            chartType="PieChart"
            loader={ loadingSpinner()}
            data={ chartData } 
            options={{
                title: 'Data Extracted from My Github Account \n (number of charecters)',
                //sliceVisibilityThreshold: 0.2, // 20%
            }}
            rootProps={{ 'data-testid': '1' }}
        />)
}