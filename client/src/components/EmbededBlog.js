import React from 'react';
import BlogPostCard from '../cards/BlogPostCard';
import blogPostsData from '../data/blogPosts.json';
import { generateKey, chooseSideColor } from '../helpers';


const EmbededBlog = () => {
    // const certUrl = isLocalhost ? "http://localhost:3000/blog/" : 'https://www.ahmad-ali.co.uk/blog/';


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
                                    title={pr.title}
                                    color={chooseSideColor()}
                                    link={pr.link}
                                    preview={pr.preview}
                                    target={pr.target}
                                    key={"blogPost" + generateKey()}

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
