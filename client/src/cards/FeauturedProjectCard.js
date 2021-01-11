import React from "react";

const FeaturedProjectCard = ({
  projectTitle,
  textHtml,
  color,
  projectLink,
  date,
  place,
  imageUrl,
  imgPadding,
  imgBgColor,
  imgHeight,
  imgWidth,
  imageCode,
}) => {
  const imageMarkup = (
    <div
      className="text-center m-auto"
      style={{ padding: imgPadding ? imgPadding : "" }}
    >
      {imageCode ? (
        <div
          className="p mb-0 font-weight-bold text-gray-800"
          dangerouslySetInnerHTML={{ __html: imageCode }}
        />
      ) : (
        <img
          src={imageUrl}
          style={{ padding: "auto" }}
          alt={projectTitle}
          width={imgWidth ? imgWidth : "200px"}
          height={imgHeight ? imgHeight : "100px"}
        />
      )}
    </div>
  );


  return (
    <div className="col-12 mb-4">
      <div className={`card border-left-${color} shadow h-100 py-2`}>
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col-12 col-md-9 mr-2">
              <div className="text-lg font-weight-bold text-primary text-uppercase mb-1">
                <a href={projectLink} target="_blank">
                  {" "}
                  {projectTitle}{" "}
                </a>
              </div>

              <div className="text-sm font-weight-bold text-secondary  mb-1">
                <div className="row text-uppercase">
                  <div className="col-12 col-md-4 mb-1">
                    <i className="far fa-calendar-alt mr-2"></i>
                    {date} , {place}
                  </div>
                </div>

                <div
                  className="p mb-0 font-weight-bold text-gray-800"
                  dangerouslySetInnerHTML={{ __html: textHtml }}
                />
              </div>
            </div>

            <div
              className="col-12 col-md-2"
              style={{ backgroundColor: imgBgColor ? imgBgColor : "" }}
            >
              {imageMarkup}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectCard;
