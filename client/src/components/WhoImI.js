import React from 'react';
import WhoAmICard from '../cards/WhoAmICard';
import Summary from './textComponents/Summary'


const WhoAmI = () => {

    return (
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
    );
}


export default WhoAmI;
