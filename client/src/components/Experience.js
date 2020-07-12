import React from 'react';
import ExperienceCard from '../cards/ExperienceCard';

const Experience = () => {

    const codeYourFuture = () => {
        return (<ul>
            <li>teaching students a full-stack 8-month long course.</li>
            <li>building the internal infrastructure which contains more than 6 apps that support and organise more than 1000 students and volunteers in more than 10 cities around the world.</li>
            <li> created projects so the students can work on them as homework.</li>
            <li>reviewed students code and gave them advice following the best practices.</li>
            <li> I have more than 2000 lines in production.</li>
        </ul>)
    }

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
                            iconClass="fas fa-calendar-alt"
                            TextComponent={codeYourFuture}
                            imageUrl="https://codeyourfuture.io/wp-content/uploads/2019/03/cyf_brand.png"
                            image="rect"
                        />

                        <ExperienceCard
                            orienting="right"
                            cardLink="https://docs.ahmad-ali.co.uk/"
                            color="success"
                            title="Activity Docs"
                            text="Quick CheatSheets"
                            iconClass="fas fa-user-cog"
                            TextComponent={codeYourFuture}
                            imageUrl="https://dl.dropbox.com/s/2kqh712gqev9yhy/ahmad-ali-200-200.jpg?dl=0"
                        />

                        <ExperienceCard
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
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Experience;
