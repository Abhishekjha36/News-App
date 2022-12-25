import React from "react";

function News({ discri, img, date, url }) {
  return (
    <>
      <div className="main">
        <div className="card-container">
          <div className="card-img">
            <img src={img} alt="img not found" />
          </div>
          <div className="discri">
            <p>{discri}</p>
            <a target="_blank" href={url}>
              Read More
            </a>
            <span>{date}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
