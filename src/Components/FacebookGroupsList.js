import React, { Component } from 'react';

import FacebookGroupsDetail from './FacebookGroupsDetail';
import facebookgroups from './../data/facebookgroups';


const FacebookGroupsList = (props) => {
  return (
    <div className="grouplist" >
      <h1>List of Facebook Rental Groups - SF Bay Area</h1>

        { 
          facebookgroups.map((item, i) => {
            return <FacebookGroupsDetail {...item} key={i} index={i} />
          })
        }

    </div>
  )
}

export default FacebookGroupsList;
