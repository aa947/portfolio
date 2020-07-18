import React from 'react';

const ProjectCard = ({ projectTitle, sourceCodeLink, color, projectLink, iconClass, image }) => {

    return (
        <div className="col-xl-4 col-md-4 col-sm-6 col-12 mb-4">
            <div className={`card border-left-${color} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        {projectTitle && <div className="col mr-2">
                            <div className="text-sm font-weight-bold text-primary text-uppercase mb-1">
                                <a href={projectLink}> {projectTitle} </a>
                            </div>

                            <div className="p mb-0 text-xs text-gray-800"><a href={sourceCodeLink}> Source Code</a></div>

                        </div>
                        }

                        <div className="col-auto">
                            {iconClass && <i className={`${iconClass} fa-2x text-gray-300`}></i>}
                            {image && <img src={image} width="28px" />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ProjectCard;