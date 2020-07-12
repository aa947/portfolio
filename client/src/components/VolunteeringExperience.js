import React from 'react';
import ExperienceCard from '../cards/ExperienceCard';
import IbelieveInScience from './experiences/IbelieveInScienc';
import SocialMwLabs from './experiences/SocialMwLabs';

const VolunteeringExperience = () => {

    return (
        <div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Volunteering Experience</h6>
                </div>


                <div className="card-body">
                    <div className="row">
                        <ExperienceCard
                            orienting="left"
                            cardLink="https://www.ibelieveinsci.com/"
                            color="primary"
                            title="I Believe In Science"
                            text="Science Translator"
                            TextComponent={IbelieveInScience}
                            imageUrl="https://pbs.twimg.com/profile_images/985113739576987648/o1alWRUq_400x400.jpg"
                            date="Feb 2014 - Feb 2017"
                            place="Lebanon"
                        />

                        <ExperienceCard
                            orienting="left"
                            cardLink="https://www.facebook.com/mwlabs2"
                            color="success"
                            title="MW Labs"
                            text="Social Media Marketer"
                            TextComponent={SocialMwLabs}
                            imageUrl="https://dl.dropbox.com/s/4loiea2ag4tpukw/mw1002.png?dl=0"
                            date="Aug 2015 - Dec 2016"
                            place="Syria"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}


export default VolunteeringExperience;
