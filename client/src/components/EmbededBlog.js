import React from 'react';
import BlogPostCard from '../cards/BlogPostCard';
import blogPostsData from '../data/blogPosts.json';

import { isLocalhost } from '../helpers';


const EmbededBlog = ({ chooseSideColor }) => {
    const certUrl = isLocalhost ? "http://localhost:3000/blog/" : 'https://www.ahmad-ali.co.uk/blog/';


    return (
        <div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Blog</h6>
                </div>
                <div className="card-body">
                    <div className="row">

                        {
                            blogPostsData.map(pr =>

                                <BlogPostCard
                                    courseTitle={pr.title}
                                    color={chooseSideColor()}
                                    courseLink={pr.link}
                                    preview={pr.preview}

                                />
                            )
                        }



                    </div>
                </div>
            </div>
        </div>
    );
}


export default EmbededBlog;
