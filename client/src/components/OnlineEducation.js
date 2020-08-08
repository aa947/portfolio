import React from 'react';
import OnlineEducationCard from '../cards/OnlineCourseCard';
import OnlineEducationData from '../data/certificates.json';

import { isLocalhost, generateKey, chooseSideColor } from '../helpers';


const OnlineEducation = () => {
    const certUrl = isLocalhost ? "http://localhost:3000/certificates/" : 'https://www.ahmad-ali.co.uk/certificates/';


    return (
        <div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Online Education</h6>
                </div>
                <div className="card-body">
                    <div className="row">

                        {
                            OnlineEducationData.map(pr =>

                                <OnlineEducationCard
                                    courseTitle={pr.cert_name}
                                    detailsLink={certUrl + pr._id.$oid}
                                    color={chooseSideColor()}
                                    courseLink={pr.course_url}
                                    key={"onlineCourse" + generateKey()}

                                />
                            )
                        }



                    </div>
                </div>
            </div>
        </div>
    );
}


export default OnlineEducation;
