import React, { useState, useEffect } from 'react';
import YoutubeVideoCard from '../cards/YoutubeVideoCard';
import youtubeVideosData from '../data/youtubevideos.json';
import { generateKey, chooseSideColor, sleep } from '../helpers';
import Loading from '../helpers_components/Loading';




const YoutubeChannel = () => {

    const [waiting, setWaiting] = useState(true);

    const changeWaiting = async () => {
        await sleep(6000);
        return setWaiting(false)
    }

    useEffect(() => {
        changeWaiting()
    }, [])


    return (
        <div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">YouTube Channel</h6>
                </div>
                <div className="card-body">
                    <div className="row">

                        {
                            !waiting ? youtubeVideosData.map(pr =>

                                <YoutubeVideoCard
                                    title={pr.title}
                                    color={chooseSideColor()}
                                    videoLink={pr.link}
                                    key={"video" + generateKey()}

                                />
                            ) : <Loading />
                        }



                    </div>
                </div>
            </div>
        </div>
    );
}


export default YoutubeChannel;
