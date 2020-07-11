import React, { Component } from 'react';
import './css/header.css';
import TopTextCard from '../cards/TopTextCard';

/***
 * This component Represent the 4 Call to Action Cards on the Top of the website
 */
class CallToActionCards extends Component {

  render() {
    return (
      <React.Fragment>

        <TopTextCard
          cardLink="/meetings"
          color="primary"
          title="Book a Meeting"
          text="Get a Free Quote"
          iconClass="fas fa-calendar-alt"
        />

        <TopTextCard
          cardLink="https://docs.ahmad-ali.co.uk/"
          color="success"
          title="Activity Docs"
          text="Quick CheatSheets"
          iconClass="fas fa-user-cog"
        />

        <TopTextCard
          cardLink="/report"
          color="info"
          title="My Report"
          text="Work Summary"
          iconClass="fas fa-chart-line"
        />

        <TopTextCard
          cardLink="/reviews"
          color="warning"
          title="Add a Review"
          text="Review My Work"
          iconClass="fas fas fa-bullhorn"
        />

      </React.Fragment>
    );
  }
}

export default CallToActionCards;
