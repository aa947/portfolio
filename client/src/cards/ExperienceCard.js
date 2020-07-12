import React from 'react';

const TopTextCard = ({ title, text, color, cardLink, iconClass, orienting, TextComponent, imageUrl, image }) => {

    const imageMarkup = image === 'rect' ? (
        <img src={imageUrl} width="200px" height="100px" />
    ) : (
            <img src={imageUrl} width="100px" height="100px" />
        );

    return (
        <div className="col-12 mb-4">
            <div className={`card border-left-${color} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">

                        {orienting === 'left' ? (
                            <>
                                <div className="col mr-2">
                                    <div className="text-lg font-weight-bold text-primary text-uppercase mb-1">
                                        <a href={cardLink}> {title} </a>
                                    </div>

                                    <div className="text-sm font-weight-bold text-secondary text-uppercase mb-1">
                                        {text}
                                    </div>

                                    <div className="p mb-0 font-weight-bold text-gray-800">
                                        <TextComponent />
                                    </div>
                                </div>

                                <div className="col-auto ml-5">
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
                                            {text}
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


export default TopTextCard;