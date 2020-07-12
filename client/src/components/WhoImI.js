import React from 'react';
import WhoAmICard from '../cards/WhoAmICard';
import Summary from './textComponents/Summary';
import MetaTagsAndTitles from '../helpers_components/MetaTagsAndTitles';




const WhoAmI = () => {

    const metaDetails = {
        description: "Full-stack developer, back-ended with the precision of chemistry and medical practise.  Educated to degree level with 1 years’ experience in web development. This has given me skills in JS: MERN, PHP: WP_API, DB: MONGO, SQL, HTML and CSS.",
        title: "Ahmad Ali - Full Stack Developer",
        imageUrl: "ttps://dl.dropbox.com/s/2kqh712gqev9yhy/ahmad-ali-200-200.jpg?dl=0"
    };

    return (
        <>
            <MetaTagsAndTitles
                docTitle="Ahmad Ali - Full Stack Dev"
                tagTitle={metaDetails.title}
                description={metaDetails.description}
                imageUrl={metaDetails.imageUrl}
                url="https://www.ahmad-ali.co.uk/"
                author="Ahmad Ali"
            />
            <div>
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Who am I ?</h6>
                    </div>

                    <div className="card-body">
                        <div className="row">
                            <WhoAmICard
                                title="I'm Ahmad Ali"
                                text="Full Stack Developer"
                                TextComponent={Summary}
                                imageUrl={process.env.PUBLIC_URL + "/imgs/ahmad_ali.jpg"}
                                place="London"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}


export default WhoAmI;
