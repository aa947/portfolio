import React from "react";
import ExperienceCard from "../cards/ExperienceCard";
import codeYourFuture from "./experiences/codeYourFuture";
import Upwork from "./experiences/mwLabs";
import Pharmacist from "./experiences/pharmacist";

const Experience = () => {
  return (
    <div>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Experience</h6>
        </div>

        <div className="card-body">
          <div className="row">
            <ExperienceCard
              orienting="left"
              cardLink="https://www.upwork.com/fl/ahmad14"
              color="primary"
              title="UpWork"
              text="Full Stack Developer"
              TextComponent={Upwork}
              imageUrl="/imgs/logos/upwork.png"
              image="rect"
              date="October 2020 - present"
              place="London"
            />
            <ExperienceCard
              orienting="left"
              cardLink="https://codeyourfuture.io/"
              color="primary"
              title="code Your Future"
              text="Full Stack Developer"
              TextComponent={codeYourFuture}
              imageUrl="https://codeyourfuture.io/wp-content/uploads/2019/03/cyf_brand.png"
              image="rect"
              date="April 2020 - present"
              place="London"
            />

            <ExperienceCard
              orienting="left"
              cardLink="https://www.google.com/maps/place/صيدلية+بيلسان%E2%80%AD/@33.4365065,36.1659669,15z/data=!4m12!1m6!3m5!1s0x0:0x61fac355961f6893!2z2LXZitiv2YTZitipINio2YrZhNiz2KfZhg!8m2!3d33.4365065!4d36.1659669!3m4!1s0x0:0x61fac355961f6893!8m2!3d33.4365065!4d36.1659669"
              color="info"
              title="Baylacan Pharmacy"
              text="Pharmacist"
              TextComponent={Pharmacist}
              imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz73B1YugOyeau5mzDGysJNEOaRBlumPadhSWWNHdYPvXV-CQ&s"
              date="Sep 2016 - April 2018"
              place="Syria"
            />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
