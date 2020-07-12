import React from 'react';
import { SocialIcon } from 'react-social-icons';


const Summary = () => {

    return (
        <>
            <p>I’m a Full-Stack Developer with 1 year of experience. I coded more than 50K lines, and I also assist in
            teaching a full-stack javascript course at CodeYourFuture. I’m educated up to degree level and I’ve
            finished more than 35 online courses. I’m currently studying computer science at UoPeople
            university. And I used to be a pharmacist.
        </p>

            <p>
                <SocialIcon url="https://www.linkedin.com/in/ahmad-ali-07383164194/" /> {'\u00A0'}
                <SocialIcon url="https://twitter.com/AhmadAl43872454" /> {'\u00A0'}
                <SocialIcon url="https://github.com/ahmad-ali14" /> {'\u00A0'}
                <SocialIcon url="https://www.facebook.com/ahmad623" /> {'\u00A0'}
            </p>
        </>
    )
}

export default Summary;