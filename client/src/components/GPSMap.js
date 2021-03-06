import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class GPSMap extends Component {
   render() {
   const GoogleMapExample = withGoogleMap(props => (
      <><GoogleMap
        defaultCenter = {{lat: 37.778519, lng: -122.405640}}
        defaultZoom = { 4 }
      >
      </GoogleMap>
      {
      this.props.images.map((result, index) => (

        <Marker
        title={'The marker`s title will appear as a tooltip.'}
        name={'SOMA'}
        position={{lat: parseFloat(result.gps.GPSLatitude), lng: parseFloat(result.gps.GPSLongitude)}}
        />

      ))
      }
      </>

   ));
   return(
      <div>

        <GoogleMapExample
          containerElement={ <div style={{ height: `500px`, width: '1000px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
   }
};
export default GPSMap;
