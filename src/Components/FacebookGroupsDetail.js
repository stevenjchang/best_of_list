import React from 'react';

import './FacebookGroupsDetail.css';

const FacebookGroupsDetail = (props) => {
  return (
    <div className="card">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600" rel="stylesheet" />

      <div className="card-header">{props.area}</div>
      <div className="card-main">
        <div className="image-container">
          <img className="image" src="https://via.placeholder.com/120x120">
          </img>
          <span className="number">{props.index + 1}</span>
        </div>
        <div className="main-description">
          {/* <a href={props.url} target="_blank"> */}
            {props.name}
          {/* </a> */}
        </div>
      </div>

    </div>
  )
}

export default FacebookGroupsDetail;
