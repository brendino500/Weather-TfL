import React from 'react'
import MapGl, { Marker } from 'react-map-gl' 
import 'mapbox-gl/dist/mapbox-gl.css'

import { getBikeStatus } from '../../lib/api'

class BikeStatus extends React.Component {
  state = {
    bikePoints: []
  }

  async componentDidMount() {
    try {
      const res = await getBikeStatus()
      console.log(res)
      this.setState({ bikePoints: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
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