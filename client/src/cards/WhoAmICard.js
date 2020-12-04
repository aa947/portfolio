import React from 'react';

const TopTextCard = ({ title, text, place, TextComponent, imageUrl }) => {






    return (
        <div className="col-12 mb-4">
            <div className={`card  h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">

                        <div className="col-12 col-md-8">
                            <div className="text-xl font-weight-bold text-black text-uppercase mb-1">
                                <h2> {title} </h2>
                            </div>

                            <div className="text-sm font-weight-bold text-secondary text-uppercase mb-1">
                                <div className="row">
                                    <div className="col-12 col-md-6 mb-1">
                                        <i className="fas fa-briefcase mr-2 mb-2"></i>
                                        {text}
                                    </div>
                                    <div className="col-12 col-md-4 mb-1">
                                        <i className="fas fa-globe-europe mr-2 mb-2"></i>
                                        {place}
                                    </div>
                                </div>
                            </div>

                            <div className="p mb-0 font-weight-bold text-gray-800">
                                <TextComponent />
                            </div>
                        </div>

                        <div className="col-md-4 text-center">
                            <img src={imageUrl}
 alt="Ahmad Ahmed ahmad Ali ali ahmed I’m a Full-Stack Developer with 2 years of experience. I assist in teaching a full-stack javascript course at CodeYourFuture. I’m educated up to degree level and I’ve finished more than 35 online courses. I’m currently studying computer science at UoPeople university. And I used to be a pharmacist.""
 width="200px" 
height="100%"
 />


                        </div>

                    </div>
                </div>
            </div>
        </div>

    );

}


export default TopTextCard;
