


import React from 'react';

const OnlineCourseCard = ({ title, videoLink, color }) => {

    return (
        <div className="col-xl-4 col-md-4 col-sm-6 col-12 mb-4">
            <div className={`card  shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        {title && <div className="col mr-2">
                            <div className="text-sm font-weight-bold text-primary text-uppercase mb-1">
                                {/* <a href={courseLink}> {title} </a> */}
                                <iframe src={videoLink}
                                    frameBorder='0'
                                    allow='autoplay; encrypted-media'
                                    allowFullScreen
                                    title='video'
                                    width="100%"
                                />
                                {/* {/* <iframe className='video' width="560" height="315" src={videoLink} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                            </div>
                            <div className="text-sm font-weight-bold text-black text-uppercase mb-1">{title}</div>
                            <div className="p mb-0 text-xs text-gray-800"><a href={videoLink}> view on Yotube</a></div>

                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}


export default OnlineCourseCard;