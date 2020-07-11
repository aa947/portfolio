import React from 'react';

const TopTextCard = ({ title, text, color, cardLink, iconClass }) => {

    return (
        <div className="col-xl-3 col-md-6 mb-4">
            <div className={`card border-left-${color} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-sm font-weight-bold text-primary text-uppercase mb-1">
                                <a href={cardLink}> {title} </a>
                            </div>
                            <div className="p mb-0 font-weight-bold text-gray-800">{text}</div>
                        </div>
                        <div className="col-auto">
                            <i className={`${iconClass} fa-2x text-gray-300`}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}


export default TopTextCard;