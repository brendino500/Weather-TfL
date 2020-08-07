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
      <div className="columns is-multiline">
        <h1>{this.htmlDecode(airQualityIndex.currentForecast[0].forecastText)}</h1>
        <h1>{airQualityIndex.currentForecast[1].forecastSummary}</h1>
      </div>
    )
  }
}

export default AirQuality