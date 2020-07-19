import React from 'react';
import YoutubeVideoCard from '../cards/YoutubeVideoCard';
import youtubeVideosData from '../data/youtubevideos.json';



const YoutubeChannel = ({ chooseSideColor }) => {



    return (
        <div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">YouTube Channel</h6>
                </div>
                <div className="card-body">
                    <div className="row">

                        {
                            youtubeVideosData.map(pr =>

                                <YoutubeVideoCard
                                    title={pr.title}
                                    color={chooseSideColor()}
                                    videoLink={pr.link}

                                />
                            )
                        }



                    </div>
                </div>
            </div>
        </div>
    );
}


export default YoutubeChannel;
