import React from 'react';
import FormalEducationCard from '../cards/FormalEducationCard';
import FormalEducationData from '../data/formalEducation.json';

const FormalEducation = () => {

    return (
        <div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Formal Education</h6>
                </div>
                <div className="card-body">
                    <div className="row">

                        {
                            FormalEducationData.map(pr =>

                                <FormalEducationCard
                                    university={pr.university}
                                    textHtml={pr.textHtml}
                                    uniLink={pr.uniLink}
                                    date={pr.date}
                                    place={pr.place}
                                    imageUrl={process.env.PUBLIC_URL + pr.imageUrl}
                                    color={pr.color}
                                    studyField={pr.studyField}
                                    imageDirection={pr.imageDirection}
                                />
                            )
                        }



                    </div>
                </div>
            </div>
        </div>
    );
}


export default FormalEducation;
