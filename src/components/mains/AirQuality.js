import React from 'react'
import { getAirQuality } from '../../lib/api'

class AirQuality extends React.Component {
  state = {
    airQualityIndex: null
  }

  htmlDecode(input){
    const e = document.createElement('div')
    e.innerHTML = input
    // return e.childNodes[0].nodeValue.replace('<br/>', () => {
    //   return '\n'
    // })
    return this.replaceAll(e.childNodes[0].nodeValue, '<br/>', '\n')
  }

  replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace)
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
    console.log(airQualityIndex)
    return (
      <div className="columns is-multiline airQuality">
        {/* https://www.deq.ok.gov/wp-content/uploads/air-division/aqi_mini-1200x675.png */}
        <h1 className="airQuality">{this.htmlDecode(airQualityIndex.currentForecast[0].forecastText)}</h1>
        <br />
        <h2 className="airQuality">{airQualityIndex.currentForecast[1].forecastSummary}</h2>
        <br />
        <img src="https://bazallergy.com/wp-content/uploads/2015/11/air-quality-index.jpg"/>
      </div>
    )
  }
}

export default AirQuality