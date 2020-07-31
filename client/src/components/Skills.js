import React from 'react';
import SkillCard from '../cards/SkillCard';
import skillsData from '../data/skills.json'

const Skills = () => {

    return (
        <div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Skills</h6>
                </div>
                <div className="card-body">
                    <div className="row">

                        {
                            skillsData.map(skill =>

                                <SkillCard
                                    color={skill.color}
                                    title={skill.skill}
                                    iconClass={skill.fontAwesome}
                                    image={process.env.PUBLIC_URL + skill.image}
                                />
                            )
                        }



                    </div>
                </div>
            </div>
        </div>
    );
}


export default Skills;
