import React from 'react';

const ExperienceCard = ({ title, text, color, cardLink, date, place, orienting, TextComponent, imageUrl, image }) => {

    const imageMarkup = image === 'rect' ? (
        <img src={imageUrl} alt={title} width="200px" height="100px" />
    ) : (
            <div style={{ width: '200px' }} className="text-center" >
                <img style={{ padding: 'auto' }} src={imageUrl} alt={title} width="100px" height="100px" />
            </div>
        );

    return (
        <div className="col-12 mb-4">
            <div className={`card border-left-${color} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">

                        {orienting === 'left' ? (
                            <>
                                <div className="col-12 col-md-9 mr-2">
                                    <div className="text-lg font-weight-bold text-primary text-uppercase mb-1">
                                        <a href={cardLink}> {title} </a>
                                    </div>

                                    <div className="text-sm font-weight-bold text-secondary text-uppercase mb-1">
                                        <div class="row">
                                            <div className="col-12 col-md-4 mb-1">
                                                <i className="fas fa-briefcase mr-2"></i>
                                                {text}
                                            </div>

                                            <div className="col-12 col-md-5 mb-1">
                                                <i className="far fa-calendar-alt mr-2 "></i>
                                                {date}
                                            </div>

                                            <div className="col-12 col-md-3 mb-1">
                                                <i className="fas fa-globe-europe mr-2 "></i>
                                                {place}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p mb-0 font-weight-bold text-gray-800">
                                        <TextComponent />
                                    </div>
                                </div>

                                <div className="col-12 col-md-2">
                                    {imageMarkup}

                                </div>
                            </>
                        ) : (
                                <>
                                    <div className="col-auto mr-5">
                                        {imageMarkup}
                                    </div>
                                    <div className="col ml-4">
                                        <div className="text-lg font-weight-bold text-primary text-uppercase mb-1">
                                            <a href={cardLink}> {title} </a>
                                        </div>

                                        <div className="text-sm font-weight-bold text-secondary text-uppercase mb-1">
                                            <i className="fas fa-briefcase mr-2"></i>
                                            {text}
                                            <i className="far fa-calendar-alt ml-5 mr-2"></i>
                                            {date}
                                            <i className="fas fa-globe-europe ml-5 mr-2"></i>
                                            {place}
                                        </div>

                                        <div className="p mb-0 font-weight-bold text-gray-800">
                                            <TextComponent />
                                        </div>
                                    </div>
                                </>
                            )}


                    </div>
                </div>
            </div>
        </div>

    );
}


export default ExperienceCard;