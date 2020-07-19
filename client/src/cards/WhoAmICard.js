import React from 'react';

const TopTextCard = ({ title, text, place, TextComponent, imageUrl }) => {






    return (
        <div className="col-12 mb-4">
            <div className={`card  h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">

                        <div className="col mr-2">
                            <div className="text-xl font-weight-bold text-black text-uppercase mb-1">
                                <h2> {title} </h2>
                            </div>

                            <div className="text-sm font-weight-bold text-secondary text-uppercase mb-1">
                                <i className="fas fa-briefcase mr-2"></i>
                                {text}
                                <i className="fas fa-globe-europe ml-5 mr-2"></i>
                                {place}
                            </div>

                            <div className="p mb-0 font-weight-bold text-gray-800">
                                <TextComponent />
                            </div>
                        </div>

                        <div className="col-auto ml-5">
                            <img src={imageUrl} alt="Ahmad Ali Full Stack Developer" width="200px" height="100%" />

                        </div>

                    </div>
                </div>
            </div>
        </div>

    );

}


export default TopTextCard;