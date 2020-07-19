import React from 'react';

const FeaturedProjectCard = ({ university, textHtml, color, uniLink, date, place, imageUrl, imageDirection, studyField }) => {

    const imageMarkup = imageDirection === 'rect' ? (
        <div className="text-center"><img src={imageUrl} alt={university} width="60%" /></div>
    ) : (
            <div className="text-center"> <div style={{ width: '100%' }} className="text-center" >
                <img style={{ padding: 'auto' }} src={imageUrl} alt={university} width="100px" height="100px" />
            </div></div>
        );

    return (
        <div className="col-12 mb-4">
            <div className={`card border-left-${color} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">



                        <div className="col-12 col-md-8 mr-2">
                            <div className="text-lg font-weight-bold text-primary text-uppercase mb-1">
                                <a href={uniLink}> {university} </a>
                            </div>


                            <div className="text-sm font-weight-bold text-secondary text-uppercase mb-1">
                                <div class="row">
                                    <div className="col-12 mb-1">
                                        <i className="fas fa-briefcase mr-2"></i>
                                        {studyField}
                                    </div>
                                </div>

                                <div class="row">


                                    <div className="col-12 col-md-4 mb-1">
                                        <i className="far fa-calendar-alt mr-2"></i>
                                        {date}
                                    </div>

                                    <div className="col-12 col-md-4 mb-1">
                                        <i className="fas fa-globe-europe mr-2"></i>
                                        {place}
                                    </div>



                                </div>

                                <div className="p mb-0 font-weight-bold text-gray-800" dangerouslySetInnerHTML={{ __html: textHtml }} />
                            </div>
                        </div>

                        <div className="col-12 col-md-3">
                            {imageMarkup}
                        </div>




                    </div>
                </div>
            </div>
        </div>

    );
}


export default FeaturedProjectCard;