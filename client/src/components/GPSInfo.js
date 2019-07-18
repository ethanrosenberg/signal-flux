import React from 'react';

const GPSInfo = props => {


    return (
      <div class="gps">
      <p>Date/Time: {props.gps.GPSDateTime}</p>
      <p>Latitude: {props.gps.GPSLatitude}</p>
      <p>Longitude: {props.gps.GPSLongitude}</p>
      <p>Position: {props.gps.GPSPosition}</p>
      </div>
    )

}

export default GPSInfo
