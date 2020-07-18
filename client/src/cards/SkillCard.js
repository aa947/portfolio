import React from 'react';

const SkillCard = ({ title, image, color, cardLink, iconClass }) => {

    return (
        // <div className="col-xl-3 col-md-6 col-sm-6 col-12 mb-4">
        //     <div className={`card border-left-${color} shadow h-100 py-2`}>
        //         <div className="card-body">
        //             <div className="row no-gutters align-items-center">
        //                 {title && <div className="col mr-2">
        //                     <div className="text-sm font-weight-bold text-primary text-uppercase mb-1">
        //                         <a href={cardLink}> {title} </a>
        //                     </div>
        //                 </div>
        //                 }

        //                 <div className="col-auto">
        //                     {iconClass && <i className={`${iconClass} fa-2x text-gray-300`}></i>}
        //                     {image && <img src={image} width="28px" />}
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        // <div className="row">
        <div className="col-1.5 mb-2">
            <div className="row text-center align-items-center">
                <div className="col-12">
                    {iconClass !== "" && image === "" && <i className={`${iconClass} fa-3x text-gray-300`}></i>}
                    {image !== "" && <img src={image} width="45px" height="45px" />}
                </div>

                <div className="col-12 text-xs font-weight-bold text-secondary mt-2">
                    {title}
                </div>
            </div>
        </div>
    );
}


export default SkillCard;