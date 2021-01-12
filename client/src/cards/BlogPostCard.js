import React from 'react';

const BlogPostCard = ({ title, detailsLink, preview, color, link, target }) => {

    return (
        <div className="col-12 mb-4">
            <div className={`card border-left-${color} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        {title && <div className="col mr-2">
                            <div className="text-sm font-weight-bold text-primary text-uppercase mb-1">
                                <a href={link}  target = {target ? target : "" }> {title} </a>
                            </div>

                            <div className="p mb-0 text-xs text-gray-800">{preview}</div>

                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}


export default BlogPostCard;