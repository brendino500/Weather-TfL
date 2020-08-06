import React from 'react'
import { getBikeStatus } from '../../lib/api'

class BikeStatus extends React.Component {
  state = {
    bikePoints: null
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
    console.log(this.state)
    const { bikePoints } = this.state

    if (!bikePoints) return null
    
    return (
      <div className="columns is-multiline">
        {bikePoints.map(bike => (
          <div key={bike.id}>
            <h1>{bike.commonName}</h1>
          </div>
        ))}
      </div>
    )
  }
}

export default BikeStatus