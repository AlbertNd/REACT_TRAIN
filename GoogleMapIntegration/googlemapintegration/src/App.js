import React, { Component } from 'react';
import { Map, GoogleApiWrapper,InfoWindow,Marker } from 'google-maps-react';

const mapStyles = {
  width: '50%',
  height: '50%'
};
// ...

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,  // Hides or shows the InfoWindow
    activeMarker: {},          // Shows the active marker upon click
    selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
  };
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  render() {
    return (
      <Map
      google={this.props.google}
      zoom={14}
      style={mapStyles}
      initialCenter={
        {
          lat: 50.5667,
          lng: 4.6833
        }
      }
    >
      <Marker
        onClick={this.onMarkerClick}
        name={'Gembloux'}
      />
      <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}
        onClose={this.onClose}
      >
        <div>
          <h4>{this.state.selectedPlace.name}</h4>
        </div>
      </InfoWindow>
    </Map>
      
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDo0DzUfc1-nRaoNz_I0N3-dRc-hfwgbfY'
})(MapContainer);