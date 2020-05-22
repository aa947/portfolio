import React, { Component } from 'react';
import { loadingSpinner} from './rendering_functions';
import Chart from "react-google-charts";


/**
 *@param props <Object> : data to be shown on the chart
 *@desc renders the chart of my Github Data
 */
export function githubData(props){
    let { followers, following, public_repos, public_gists, total, member } = props.github;
    //let { githubLoading } = props
    return  (<Chart
            width={'100%'}
            height={'300px'}
            chartType="PieChart"
            loader={ loadingSpinner()}
            data={[
                ['Task', 'Hours per Day'],
                ['Followers', followers],
                ['Following', following],
                ['Repositories', public_repos],
                ['Gists', public_gists],
                ['Years on Github', member]
            ]}
            options={{
                title: 'My Github Account Data',
                //sliceVisibilityThreshold: 0.2, // 20%
            }}
            rootProps={{ 'data-testid': '1' }}
        />)
}