import React from 'react';

const BlogPostCard = ({ courseTitle, detailsLink, preview, color, courseLink }) => {

    return (
        <div className="col-12 mb-4">
            <div className={`card border-left-${color} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        {courseTitle && <div className="col mr-2">
                            <div className="text-sm font-weight-bold text-primary text-uppercase mb-1">
                                <a href={courseLink}> {courseTitle} </a>
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