import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';

import { GOOGLE_API_KEY } from '../api-keys';    



export default class GoogleMap extends Component {
  static defaultProps = {
    defaultCenter: { lat: 40.7446790, lng: -73.9485420 },
    zoom: 11
  }

  render() {
    return (
      <div className='google-map'>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: GOOGLE_API_KEY,
            language: 'en',
          }}
          defaultZoom={ this.props.zoom }
          center={ this.props.center }
        >
        </GoogleMapReact>
      </div>
    )
  }
}

