import React from 'react';
import ExperienceCard from '../cards/ExperienceCard';
import codeYourFuture from './experiences/codeYourFuture';
import MwLabs from './experiences/mwLabs';

const Experience = () => {

    return (
        <div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Experience</h6>
                </div>

                <div className="card-body">
                    <div className="row">
                        <ExperienceCard
                            orienting="left"
                            cardLink="/meetings"
                            color="primary"
                            title="code Your Future"
                            text="Full Stack Developer"
                            TextComponent={codeYourFuture}
                            imageUrl="https://codeyourfuture.io/wp-content/uploads/2019/03/cyf_brand.png"
                            image="rect"
                            date="April 2020 - present"
                            place="London"
                        />

                        <ExperienceCard
                            orienting="left"
                            cardLink="https://ahmad-ali.co.uk/"
                            color="success"
                            title="MW Labs"
                            text="Freelance Web Developer"
                            TextComponent={MwLabs}
                            imageUrl="https://dl.dropbox.com/s/4loiea2ag4tpukw/mw1002.png?dl=0"
                            date="April 2019 - April 2020"
                            place="London"
                        />

                        {/*  <ExperienceCard
                            orienting="left"
                            cardLink="/report"
                            color="info"
                            title="My Report"
                            text="Work Summary"
                            iconClass="fas fa-chart-line"
                            TextComponent={codeYourFuture}
                            imageUrl="https://dl.dropbox.com/s/2kqh712gqev9yhy/ahmad-ali-200-200.jpg?dl=0"
                        />

                        <ExperienceCard
                            orienting="right"
                            cardLink="/reviews"
                            color="warning"
                            title="Add a Review"
                            text="Review My Work"
                            iconClass="fas fas fa-bullhorn"
                            TextComponent={codeYourFuture}
                            imageUrl="https://dl.dropbox.com/s/2kqh712gqev9yhy/ahmad-ali-200-200.jpg?dl=0"
                        /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Experience;
