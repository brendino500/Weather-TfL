import React from 'react'
import { getAirQuality } from '../../lib/api'

class AirQuality extends React.Component {
  state = {
    airQualityIndex: null
  }

  async componentDidMount() {
    try {
      const res = await getAirQuality()
      console.log(res)
      this.setState({ airQualityIndex: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const { airQualityIndex } = this.state

    if (!airQualityIndex) return null

    return (
      <div className="columns is-multiline">
        <h1>{airQualityIndex.currentForecast[0].forecastText}</h1>
        <h1>{airQualityIndex.currentForecast[0].forecastBand}</h1>
      </div>
    )
  }
}

export default AirQuality