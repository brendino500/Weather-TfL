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
            <h1 className="title is-1 has-text-centered has-text-black">{weather.location.country}</h1>
            <Clock className="title is-1 has-text-centered has-text-black" format={'HH:mm:ss'} ticking={true} />
          </div>
        </div>
      </section>
    )
  }
}

export default Home