import React from "react";
import FeatueredProjectCard from "../cards/FeauturedProjectCard";
import featuredProjectsData from "../data/featuredProjects.json";
import { generateKey, chooseSideColor } from "../helpers";

const FeauturedProjects = () => {
  return (
    <div>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Featured Projects
          </h6>
        </div>
        <div className="card-body">
          <div className="row">
            {featuredProjectsData.map((pr) => (
              <FeatueredProjectCard
                projectTitle={pr.projectTitile}
                textHtml={pr.textHtml}
                projectLink={pr.projectLink}
                date={pr.date}
                place={pr.place}
                imageUrl={process.env.PUBLIC_URL + pr.imageUrl}
                color={chooseSideColor()}
                key={"featuredProject" + generateKey()}
                imageDirection={pr.imageDirection}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeauturedProjects;
