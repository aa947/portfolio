import React from 'react';
import { generateKey } from '../helpers';


const QuickSiteMap = () => {

    const data = [['Who Am I', '#who-am-i'],
    ['Expereince', '#experience'],
    ['Volunteering Expereince', '#vlounteering'],
    ['skills', '#skills'],
    ['Feautured Projects', '#featured-projects'],
    ['Own Projects', '#own-projects'],
    ['Courses Projects', '#courses-projects'],
    ['Formal Education', '#formal-education'],
    ['Online Education', '#online-education'],
    ['Blog', '#blog'],
    ['Youtube Channel', '#youtube'],
    ['contact', '#contact'],
    ['Add review', '#add-review'],
    ['Reviews', '#reviews'],
    ]


    return (
        <div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Quick Site Map</h6>
                </div>
                <div className="card-body">
                    <div >

                        <ul className="row ">

                            {
                                data.map(e => {
                                    return (

                                        <li
                                            className="col-12 col-md-4 col-xl-4 mb-1"
                                            key={"quickmap" + generateKey()}
                                        >
                                            <div className="text-sm font-weight-bold text-primary text-uppercase ">
                                                <a href={e[1]}> {e[0]} </a>
                                            </div>
                                        </li>
                                    );
                                })
                            }
                        </ul>




                    </div>
                </div>
            </div>
        </div>
    );
}


export default QuickSiteMap;
