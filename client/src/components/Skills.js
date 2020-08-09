import React, { useEffect, useState, useRef } from 'react';
import SkillCard from '../cards/SkillCard';
import skillsData from '../data/skills.json';
import { generateKey, sleep } from '../helpers';
import Loading from '../helpers_components/Loading';

const Skills = () => {


    const [waiting, setWaiting] = useState(true);

    const changeWaiting = async () => {
        await sleep(5000);
        return setWaiting(false)
    }

    useEffect(() => {
        changeWaiting()
    }, [])


    return (
        <div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Skills</h6>
                </div>
                <div className="card-body">
                    <div className="row">

                        {
                            !waiting ? skillsData.map(skill =>

                                <SkillCard
                                    color={skill.color}
                                    title={skill.skill}
                                    iconClass={skill.fontAwesome}
                                    image={process.env.PUBLIC_URL + skill.image}
                                    key={'skill' + generateKey()}
                                />
                            ) : <Loading />
                        }



                    </div>
                </div>
            </div>
        </div>
    );
}


export default Skills;
