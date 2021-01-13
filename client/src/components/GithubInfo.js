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
            <div className="col-lg-6">
              <img
              //  align="left"
                width="100%"
                alt="Ahmad Ali's Github Stats"
                src="https://github-readme-stats.vercel.app/api?username=ahmad-ali14&count_private=true&show_icons=true&hide_border=true&theme=tokyonight"
              />
            </div>
            <div className="col-lg-6">
              <img
              //  align="right"
                width="100%"
                alt=""
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=ahmad-ali14&layout=compact&theme=tokyonight&hide_border=true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GithubInfo;
