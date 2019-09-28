import {GeoJsonLayer} from "deck.gl";
import "mapbox-gl/dist/mapbox-gl.css";
import React,{Component} from 'react';
import MapGL from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";

const TOKEN = 'pk.eyJ1IjoiYWRoZW5kbyIsImEiOiJjanh2bTFkYncwNmVvM21scWZqeHRtZmhwIn0.uAPn-uKGJvPNWrbjCprcEg' 

class SearchableMap extends Component {
  state = { 
    viewport :{
        latitude: 38.6175,
        longitude: -122.866389,
        zoom: 10
    },
    searchResultLayer: null
  }

  mapRef = React.createRef()

  handleViewportChange = viewport => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    })
  }
  // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
  handleGeocoderViewportChange = viewport => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 };

    return this.handleViewportChange({
      ...viewport,
      ...geocoderDefaultOverrides
    });
  };

  handleOnResult = event => {
    this.setState({
      searchResultLayer: new GeoJsonLayer({
        id: "search-result",
        data: event.result.geometry,
        getFillColor: [255, 0, 0, 128],
        getRadius: 1000,
        pointRadiusMinPixels: 10,
        pointRadiusMaxPixels: 10
      })
    })
  }

    render(){
      const { viewport, searchResultLayer} = this.state
      return (
        <div style={{ height: '50vh'}}>
          <MapGL 
            ref={this.mapRef}
            {...viewport}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            width="100%"
            height="98%"
            onViewportChange={this.handleViewportChange}
            mapboxApiAccessToken={TOKEN}
            >
              <Geocoder 
                mapRef={this.mapRef}
                onResult={this.handleOnResult}
                onViewportChange={this.handleGeocoderViewportChange}
                mapboxApiAccessToken={TOKEN}
                position='top-left'
              />
            </MapGL>
            
        </div>
      )
    }
}

export default SearchableMap;