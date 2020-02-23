import React from "react";
import { Map, Marker, TileLayer } from "react-leaflet";
import { connect } from 'react-redux';


 
class Location extends React.Component {
 

  render() {

    const { weatherData } = this.props;
    let pos;
    if (weatherData.data.coord) {
        pos=[weatherData.data.coord.lat, weatherData.data.coord.lon]
    }
     
    return (
      <Map center={pos} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={pos}>
          {/* <Popup>
            A pretty CSS3 popup. <br/> Easily customizable.
          </Popup> */}
        </Marker>
      </Map>
    );
  }
}

 
const mapStateToProps = (state) => {
  return ({
    weatherData: state.weatherData,
    })
}

export default connect(mapStateToProps)(Location);
 