import React from "react";

function GithubInfo() {
  return (
    <div>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Github Status</h6>
        </div>

        <div className="card-body">
          <div className="row">
            {/* <div className="col-12">
              <img
                //  align="left"
                width="100%"
                // height="300px"
                alt="Ahmad Ali's Github Stats"
                src="https://github-readme-stats.vercel.app/api?username=ahmad-ali14&count_private=true&show_icons=true&hide_title=true&hide=stars"
              />
            </div> */}
            <div className="col-12">
              <img
                //  align="right"
                width="100%"
                // height="300px"
                alt=""
                src="https://github-profile-trophy.vercel.app/?username=ahmad-ali14&theme=flat&no-frame=true&margin-w=30"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GithubInfo;
