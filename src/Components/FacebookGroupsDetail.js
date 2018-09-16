import React from 'react';

const FacebookGroupsDetail = (props) => {
  return (
    <div>
      {props.name}
      <p>{props.url}</p>
    </div>
  )
}

export default FacebookGroupsDetail;
