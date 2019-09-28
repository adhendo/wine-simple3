import React,{useState} from 'react';
import MapGL,{GeolocateControl} from 'react-map-gl';

const TOKEN = 'pk.eyJ1IjoiYWRoZW5kbyIsImEiOiJjanh2bTFkYncwNmVvM21scWZqeHRtZmhwIn0.uAPn-uKGJvPNWrbjCprcEg'

const geolocateStyle = {
    float: 'left',
  margin: '50px',
  padding: '10px'
};



const Map = () => {

    const [viewport, setViewPort ] = useState({
      width: "100%",
      height: 410,
      latitude: 38.6175,
      longitude: -122.866389,
      zoom: 10
    })
  
    const _onViewportChange = viewport => setViewPort({...viewport, transitionDuration: 3000 })
    
    return (
      <div style={{ flex: '1', margin: '0 auto'}}>
        <MapGL
          {...viewport}
          mapboxApiAccessToken={TOKEN}
          mapStyle="mapbox://styles/mapbox/satellite-streets-v9"
          onViewportChange={_onViewportChange}
        >
          <GeolocateControl
            style={geolocateStyle}
            positionOptions={{enableHighAccuracy: true}}
            trackUserLocation={true}
          />
        </MapGL>
      </div>
    )
  }
  
  export default Map