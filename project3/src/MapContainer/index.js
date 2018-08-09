import React from 'react';
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps';



const MapContainer = (withGoogleMap((props) =>
	<GoogleMap
    center= {{lat:41.881832, lng: -87.623177}}
    zoom= {10}
  >

      {props.isMarkerShown && <Marker position={{lat:41.881832, lng: -87.623177}}/>}
    </GoogleMap>

))

export default MapContainer;
