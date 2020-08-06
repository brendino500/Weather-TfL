import React from 'react'
import { getWeatherStatus } from '../../lib/api'

class Home extends React.Component {
  state = {
    weather: null
  }

  async componentDidMount() {
    try {
      const res = await getWeatherStatus()
      // console.log(res.data)
      this.setState({ weather: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    console.log(this.state)
    const { weather } = this.state

    if (!weather) return null 

    return (
      <section className="hero is-fullheight-with-navbar is-warning">
        <div className="hero-body">
          <div className="container">
            <p className="title is-1 has-text-centered has-text-black">
              <span role="img" aria-label="logo" className="logo-emoji"></span>Digital Time
            </p>
            <h1>Humidity: {weather.current.condition.icon}</h1>
          </div>
        </div>
      </section>
    )
  }
}

export default Home