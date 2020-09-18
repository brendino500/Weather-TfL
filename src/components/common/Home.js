import React from 'react'
import Clock from 'react-live-clock'
import { getWeatherStatus } from '../../lib/api'



class Home extends React.Component {
  state = {
    weather: null
  }

  async componentDidMount() {
    try {
      const res = await getWeatherStatus()
      this.setState({ weather: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const { weather } = this.state

    if (!weather) return null 

    return (
      <section className="bg-img is-success is-fullheight home">
        <div className="hero-body">
          <div className="bg-img is-success is-fullheight">
            <div className="container has-text-centered">
              <h1 className="title">
                {weather.location.name}
              </h1>
              <h2 className="title">
                {`${weather.current.temp_c}°C`}
              </h2>
              <img src={weather.current.condition.icon} alt="weather-icon" />
              <h4 className="title">
                {weather.current.condition.text}
              </h4>
              <Clock className="title is-2 has-text-centered" format={'HH:mm:ss'} ticking={true} />
            </div>
          </div>
        </div>
      </section>


    )
  }
}

export default Home
