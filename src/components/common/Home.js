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
      <section className="bg-img is-success is-fullheight">
        <div className="hero-head">
          <div className="bg-img is-success is-fullheight">
            <div className="container has-text-centered">
              <h1 className="title">
                {weather.location.name}
              </h1>
              <Clock className="title is-1 has-text-centered has-text-white" format={'HH:mm:ss'} ticking={true} />
            </div>
          </div>
        </div>
      </section>


    )
  }
}

export default Home