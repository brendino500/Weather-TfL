import React from 'react'
import MapGl, { Marker } from 'react-map-gl' 
import 'mapbox-gl/dist/mapbox-gl.css'

import { getBikeStatus } from '../../lib/api'

class BikeStatus extends React.Component {
  state = {
    bikePoints: [],
    longitude: null,
    latitude: null
  }

  async componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      console.log('Latitude is :', position.coords.latitude)
      console.log('Longitude is :', position.coords.longitude)
      const lat = position.coords.latitude
      const long = position.coords.longitude
      this.setState({ longitude: long, latitude: lat })
    })

    if ('geolocation' in navigator) {
      console.log('Available')
    } else {
      console.log('Not Available')
    }
  
    try {
      const res = await getBikeStatus()
      console.log(res)
      this.setState({ bikePoints: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const { longitude, latitude } = this.state

    if (!longitude || !latitude) return null
    
    return (
      <MapGl 
        mapboxApiAccessToken={process.env.REACT_APP_MAPTOK}
        height={'100vh'}
        width={'100vw'}
        mapStyle='mapbox://styles/mapbox/dark-v10'
        latitude={51.515}
        longitude={-0.078}
        zoom={12}
      >
        {this.state.bikePoints.map(point => (
          <Marker
            key={point.id}
            latitude={point.lat}
            longitude={point.lon}
          >
            <span role="img" aria-label="marker" className="marker">🚴‍♀️</span>
          </Marker>
        ))}
      </MapGl>
    )
  }
}

export default BikeStatus